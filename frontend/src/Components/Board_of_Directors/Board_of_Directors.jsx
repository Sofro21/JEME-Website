import React, { useState, useEffect } from 'react'
// import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";

const ShowBoardofDirectors = () => {
    const [boardmembers, setBoardMembers] = useState(null);
    // useEffect(() => {
    //   async function fetchBoardMember() {
    //     try {
    //       const response = await fetch(``);
    //       const data = await response.json();
    //       if (data && data.data) {
    //         setBoardMember(data.data.attributes);
    //       }
    //     } catch (error) {
    //       console.error("Error fetching recipe:", error);
    //     }
    //   }
    //   fetchBoardMember();
    // }, [boardmember1]);
    useEffect(() => {
        fetch('http://localhost:1337/api/board-of-directors?populate=*')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setBoardMembers(data);
          });
      }, []);
    
      
    return (
        
        <>{console.log(boardmembers)}
        
            <h2>
                {/* <h2>Board of directors: {boardmembers.Name}</h2> */}
                {boardmembers && boardmembers.data.map((member) => (
                    <div> 
                        <h2 key={member.id}>{member.attributes.Name}</h2>
                        <img src={"http://localhost:1337" + member.attributes.Image.data.attributes.url}/>
                    </div>
                   
                ))}
                {/* SOfrooooo */}
            </h2>
        </>
    )
};

export default ShowBoardofDirectors;



