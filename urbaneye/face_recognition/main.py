import streamlit as st
import requests
from streamlit_lottie import st_lottie
import cv2
import numpy as np
from simple_facerec import SimpleFacerec
from apicall import add_in_base
from imagesapi import getimages

# Function to load Lottie animation from a URL
def load_lottieurl(url: str):
    r = requests.get(url)
    if r.status_code != 200:
        return None
    return r.json()

# Hide Streamlit style elements
hide_st_style = """
            <style>
            #MainMenu {visibility: hidden;}
            footer {visibility: hidden;}
            header {visibility: hidden;}
            </style>
            """
st.markdown(hide_st_style, unsafe_allow_html=True)

# Sidebar styling
st.markdown(
    """
    <style>
    [data-testid="stSidebar"][aria-expanded="true"] > div:first-child {
        width: 350px;
    }
    [data-testid="stSidebar"][aria-expanded="false"] > div:first-child {
        width: 350px;
        margin-left: -350px;
    }
    </style>
    """,
    unsafe_allow_html=True,
)

st.sidebar.title('Face Recognition App to Find Missing People')
st.sidebar.subheader('Parameters')

app_mode = st.sidebar.selectbox('Choose the App mode', ['Detection Mode', 'Further Process'])

if app_mode == 'Further Process':
    st.markdown("<h1 style='font-family:sans-serif; color:#282c34; font-size: 50px;font-weight:700'>Further Process</h1>", unsafe_allow_html=True)
    st.markdown('Here after detection from the web cam in the detection mode we can get the data related to the missing person with his current location and the time detected in the information section of the website.')
    st.markdown('If you want more information about the missing peoples please visit missing people on the website and click on tracked locations for getting information about missing persons that have been tracked or have been found somewhere through surveillance.')
    st.image("assets//navbar.png")
    st.markdown(
        """
        <style>
        [data-testid="stSidebar"][aria-expanded="true"] > div:first-child {
            width: 350px;
        }
        [data-testid="stSidebar"][aria-expanded="false"] > div:first-child {
            width: 400px;
            margin-left: -450px;
        }
        </style>
        """,
        unsafe_allow_html=True,
    )
else:
    use_webcam = st.sidebar.button('Use Webcam')
    original_title = '<p style="font-family:sans-serif; color:#282c34; font-size: 50px;text-align:center;font-weight:700">Face Recognition App</p>'
    st.markdown(original_title, unsafe_allow_html=True)

    lottie_url = "https://assets10.lottiefiles.com/packages/lf20_2szpas4y.json"
    lottie_face = load_lottieurl(lottie_url)
    if not use_webcam:
        st_lottie(lottie_face, key='face_recognition')
    else:
        # Initialize SimpleFacerec and load encoded images
        sfr = SimpleFacerec()
        sfr.load_encoding_images("/home/jahanvi/Downloads/urban/urbaneye/server/uploads")

        # Set up the webcam stream in Streamlit
        FRAME_WINDOW = st.image([])

        cap = cv2.VideoCapture(0)

        if not cap.isOpened():
            st.error("Error: Could not open webcam.")
        else:
            namesset = set()

            while True:
                ret, frame = cap.read()

                if not ret:
                    st.error("Error: Could not read frame from webcam.")
                    break

                # Detect faces
                face_locations, face_names = sfr.detect_known_faces(frame)
                for face_loc, name in zip(face_locations, face_names):
                    y1, x2, y2, x1 = face_loc[0], face_loc[1], face_loc[2], face_loc[3]
                    if name != "Unknown":
                        flag = name in namesset
                        namesset.add(name)
                        if not flag:
                            add_in_base(name)
                            print(name)

                    cv2.putText(frame, name, (x1, y1 - 10), cv2.FONT_HERSHEY_DUPLEX, 1, (0, 0, 200), 2)
                    cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 200), 4)

                newframe = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                FRAME_WINDOW.image(newframe)
                
                # Break the loop on pressing 'Esc'
                if cv2.waitKey(1) & 0xFF == 27:
                    break

            cap.release()
            cv2.destroyAllWindows()
