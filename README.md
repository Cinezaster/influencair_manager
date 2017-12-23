# Influencair sensor status notifier daemon

This daemon runs every 20 minutes.
It will fetch all current sensors in an area around a given lat/lon point from luftdaten.
It will update a sensor object in a Parse Database.
If a new sensor has been found a bot will notify this event on a Slack channel.
If a sensor is offline for longer then on hour it will a Slack bot will tell and notifies the owner of the sensor
If a sensor is back online the Slack bot will tell on the slack channel

## How does it work

It uses Docker for containerization.
It starts up a 'Cronjob' that runs the script.

You have to set a couple of environmental variables to make it work:
- latitude
- longitude
- radius
- parseAppId *(required)*
- slackBotToken *(required)*
