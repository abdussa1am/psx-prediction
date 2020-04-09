import React from 'react'

    const Contacts = ({ response }) => {
      return (
               <div>
          <center><h1>Contact List</h1></center>
          {response.map((contact) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.name}</h5>
                
               {/* <h6 class="card-subtitle mb-2 text-muted">{contact.symbol}</h6>
                <p class="card-text">{contact.price}</p>*/}
              </div>
            </div>
          ))}
          </div>
          )

    };

    export default Contacts