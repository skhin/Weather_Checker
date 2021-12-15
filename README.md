# Weather_Checker

For SEI Project 2, we were tasked with creating a React App using FreeApis and was given one week to create it.
With me residing in my default city, it would be beneficial to know what the weather would be like over the next few days as well as to get a glimpse of what it would be like in other parts of the world.
Hence, I chose to use the OPENWEATHERMAP API ("https://openweathermap.org/api"). This API targets the location of pretty much anywhere in the world to retrieve weather information for past, present and future.

I started off with the basic format of how I would like the App to consist off.
a. Default City of Singapore where it would display the current weather, date, time, etc, as well as the 5-6 day forecast.
b. Search Form for users who wish to look for other cities around the world
c. The option to add more cities for them to look at, at any one time whereby the array keeps being added, but up to a certain number due to sizing and aesthetic purposes
d. A remove button whereby users can remove the city from their view (perhaps in order not to cramp up the screen)

Below is a sample of what the vision would be like.
<img width="278" alt="Screenshot 2021-12-14 at 10 08 46 AM" src="https://user-images.githubusercontent.com/88125976/145919998-39a494d0-5fc9-4b7a-8c22-667c6d9349a3.png">

After presentation of my MVP, I attempted to work on my stretch goals, which consisted of the following:
a. Adding in 2 more default cities
b. Adding in an active country button where the forecast will be displayed of that city
c. Change the background color from light mode to dark mode (depending on the sunrise and sunset time)

Below are some interesting (to me) sample codes:
a. Changing the temperature from ℃ to ℉ and vice versa. This will update the temperature units from metric to imperial and back again.
<img width="412" alt="Screenshot 2021-12-14 at 10 14 17 AM" src="https://user-images.githubusercontent.com/88125976/145920592-0037505e-00f0-4fa2-bd4b-d7ad36467316.png">

b. I found it was possible to put majority of your functions into a component and have it exported as a whole page instead of individually importing each component to every page. There could be a slip up of a missing component in your file which would result in the failure to compile. I used this to update all the state functions on one page.
<img width="384" alt="Screenshot 2021-12-15 at 12 48 41 PM" src="https://user-images.githubusercontent.com/88125976/146125092-03e8f1e8-c957-4181-b30e-e97c5435b1ea.png">


c. Another new development I learned was process.env whereby one can store your APIKeys safely without users abusing the info.
<img width="390" alt="Screenshot 2021-12-15 at 12 47 17 PM" src="https://user-images.githubusercontent.com/88125976/146125047-a2e49af7-8780-4a33-a202-2beb5d062b3d.png">

d. Was able to change the background color of the page depending on the sunrise and sunset time of the location
<img width="741" alt="Screenshot 2021-12-15 at 12 49 45 PM" src="https://user-images.githubusercontent.com/88125976/146125172-6a68a34e-b561-4774-81ab-b62371bf0ed0.png">

Still left to complete:
The default cities would usually follow the time and date of the 1st default city in the array as well as the wrong sunrise and sunset time. This needs to be amended

React Hooks used for this project: useState, useReducer, useContext
Imported axios (for API) and moment for the format of the time
