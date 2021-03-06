import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Header, List } from 'semantic-ui-react';
import './App.css';



function App() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response.data);
      setActivities(response.data);
    });
  }, [])

  return (
    <div >
      <Header as='h2' icon='users' content='Reactivities'/>
      <List>
        {activities.map((activity:any) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
