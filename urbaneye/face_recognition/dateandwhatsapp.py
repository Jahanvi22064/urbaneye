
import requests

def sendmessage(number, name, adhaar, location):
    """
    Send a WhatsApp message to a stakeholder using UltraMsg API.

    Parameters:
        number (str): The phone number of the recipient (without country code).
        name (str): The name of the individual.
        adhaar (str): The Aadhaar number of the individual.
        location (dict): A dictionary containing location details like city, region, country, latitude, and longitude.

    Returns:
        dict: API response as a dictionary.
    """
    # Extract location details
    city = location.get('city', 'Unknown')
    region = location.get('region', 'Unknown')
    country = location.get('country', 'Unknown')
    latitude = location.get('latitude', 'Unknown')
    longitude = location.get('longitude', 'Unknown')

    # Construct the message
    message = (
        f"Your dear one with name {name}, bearing Aadhaar number {adhaar}, has been found at a location:\n"
        f"Country: {country}, Region: {region}, City: {city},\n"
        f"Latitude: {latitude}, Longitude: {longitude}.\n\n"
        "Regards, urbaneye"
    )

    # Prepare API request details
    url = "https://api.ultramsg.com/instance87419/messages/chat"
    payload = {
        "token": "a36apopn5wmqktsu",
        "to": f"+91{number}",
        "body": message,
        "priority": "1",
        "referenceId": ""
    }
    headers = {'Content-Type': 'application/x-www-form-urlencoded'}

    # Send the request
    try:
        response = requests.post(url, data=payload, headers=headers)
        response.raise_for_status()  # Raise an error for HTTP 4xx/5xx responses
        return response.json()  # Return the parsed JSON response
    except requests.exceptions.RequestException as e:
        print(f"An error occurred while sending the message: {e}")
        return {"error": str(e)}
