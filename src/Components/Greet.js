

function Greet(Probs) {
    return(
      <div>
          <h1>Hello , {name} </h1>
          <h2> Hello, {formatName(user)}</h2>
          <h2> {element}</h2>
          <Demo/>
          <h2>name change{Probs.fog}</h2>
          <button onClick={Demo2}>UpdateName</button>
         
          
     </div>
     )
   }
   function formatName(user){
      return user.firstName+ ''+user.lastName;
   }
   function Wait(Probs){
      return <h2>welcome {Probs.name}</h2>
   }
   const element = <Wait name="36" />;
   function Welcome(props) {
      return <h3>Hello, {props.name}</h3>;
    }

   function Demo() {
      return (
        <div>
          <Welcome name="Sara" />
          <Welcome name="Cahal" />
          <Welcome name="Edite" />
        </div>
      );
    }

   const name="anil";
   
   const user = {
      firstName:'Harper',
      lastName:'Perez',}

      
        function Demo2() {
          
          console.log('You clicked submit.');
        }
      
      
         
       

export default Greet;