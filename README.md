Seattle 911 Police Calls 
====================
Tools
--------------------
We used the following development tools and frameworks to complete the assignment:
- Google Maps API
- HTML / CSS
- JQuery
- SODA2 API
- D3

Data Set
--------------------
The dataset we chose looks at 911 calls to the police department and is updated on a 4 hour basis by the city of Seattle. The calls are separated into groups and then into further subgroups.  Each call has information about the sector, id, time and beat where the call took place.  We thought this would be interesting to see where certain crimes take place in the city and to easily see if there are patterns as to where certain types of crime take place. The data can be obtained from <a href="https://data.seattle.gov/Public-Safety/Seattle-Police-Department-911-Incident-Response/3k2p-39jp">data.seattle.gov</a>.

Storyboard and Iteractions
--------------------

Final Visualization
--------------------
Our final visualization stays quite close to our initial vision.  We have an overlayed window on the right side of the web page to allow for the user to interact with the different filters. If the user wishes to remove the window form view they can click on the three vertical bars just to the left of the window.  This will cause the window to slide out of view.  

We provide various differnt filters to interact with the data.  We allow users to select what category of crime they wish to explore.  These have been bucketed because of the vast amount of groups that are present in the data set.  We allow users to filter on the following crime categories: Theft, Harbor Violations, Violent Crime, Sex Crime, Disturbances and Drugs and Narcotics.  We realized that this might be too broad since one category can have many sub groups.  Thus, we provide a text field to allow for a custom search of the database.  For instance, if a user wanted to just see homicides and no other violent crime then they could just type 'homicide' into the custom search box. Each filter has a unique color encoding that is indicated to its right.  These colors were selected by using the Tableau 20 color palette to ensure we picked colors that were different enough to easily differentiate from one another. This is also the reason we limited our filters to 7 since any more colors would be difficult to differentiate. 

The data can also be filtered by date.  We wanted users to be able to select calls based on a window of time.  Users can thus enter a beginning and ending date as well as a time range.  One important aspect is the hour time range is from, say 12:00 to 13:00, then that does not mean that everything outside of these time ranges are filtered unless the date range is the same day.  So if 2014-01=01 and 2014-02=01 are selected for the dates then it will filter everything before noon on January 1st and after 1:00 pm on February second.  The hour filter is most useful for single day intervals. 

Finally, users can select on individual data points to see information about that call in the lower left hand corner.  This provides information about the type of call, the time of the incident and its id. 

Differences From Storyboard
--------------------

Our final interactive visualization allows for all of the above with the exception of selecting based on a neighborhood and the heat map.  We were able to find GeoJson data from Zillow that gave us the geometry for the neighborhoods around Seattle. However, the problem was that we decided to use Google Maps to display individual data points with D3.  The svg elements are placed in an overlay on the map.  This overlay is sandwiched in between other layers for the map.  Thus that layer cannot receive mouse events.  We overcame this with data points by putting “invisible” Google Maps markers on all the same locations as the svg elements.  This makes it appear that the svg elements are clickable, when they actually are not.  This would make tracking mouse coordinates to select a particular neighborhood very difficult.  

The other option was to have a drop down that would allow the user to select a neighborhood.  The problem with this is that the API only allows us to bring in data based on square coordinate blocks.  The neighborhoods are obviously not square and thus quite a bit of additional logic would need to be added to filter anything outside of the boundaries.  We decided to hold off on implementing the neighborhood selection to work on other aspects in case we ran out of time.  We did run out of time and thus we were unable to implement it. 

Development Process
--------------------

Time Spent
--------------------

Sources
--------------------
-<a href="http://d3js.org">D3</a></br>
-<a href="https://developers.google.com/maps/">Google Maps API</a></br>
-<a href="https://data.seattle.gov/Public-Safety/Seattle-Police-Department-911-Incident-Response/3k2p-39jp">Data Set </a></br>
-<a href="http://www.jquery.com">jQuery</a></br>
