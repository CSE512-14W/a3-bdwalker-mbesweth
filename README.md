Seattle 911 Police Calls 
====================



Data Set
--------------------
The dataset we chose looks at 911 calls to the police department and is updated on a 4 hour basis by the city of Seattle. The calls are separated into groups and then into further subgroups.  Each call has information about the sector, id, time and beat where the call took place.  We thought this would be interesting to see where certain crimes take place in the city and to easily see if there are patterns as to where certain types of crime take place. The data can be obtained from <a href="https://data.seattle.gov/Public-Safety/Seattle-Police-Department-911-Incident-Response/3k2p-39jp">data.seattle.gov</a>.

Storyboard and Iteractions
--------------------

Final Visualization
--------------------
Our final visualization stays quite close to our initial vision.  We have an overlayed window on the right side of the web page to allow for the user to interact with the different filters. If the user wishes to remove the window form view they can click on the three vertical bars just to the left of the window.  This will cause the window to slide out of view.  

We provide various differnt filters to interact with the data.  We allow users to select what category of crime they wish to explore.  These have been bucketed because of the vast amount of groups that are present in the data set.  We allow users to filter on the following crime categories: Theft, Harbor Violations, Violent Crime, Sex Crime, Disturbances and Drugs and Narcotics.  We realized that this might be too broad since one category can have many sub groups.  Thus, we provide a text field to allow for a custom search of the database.  For instance, if a user wanted to just see homicides and no other violent crime then they could just type 'homicide' into the custom search box. 

The data can also be filtered by date.  We wanted users to be able to select calls based on a window of time.  Users can thus enter a beginning and ending date as well as a time range.  One important aspect is the hour time range is from, say 12:00 to 13:00, then that does not mean that everything outside of these time ranges are filtered unless the date range is the same day.  So if 2014-01=01 and 2014-02=01 are selected for the dates then it will filter everything before noon on January 1st and after 1:00 pm on February second.  The hour filter is most useful for single day intervals. 

Finally, users can select on individual data points to see information about that call in the lower left hand corner.  This provides information about the type of call, the time of the incident and its id. 

--------------------
