function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{currentUser:0,users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100, transactions:[]}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/homeS" component={Home} />          
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);