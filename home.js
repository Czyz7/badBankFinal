function Home(){
    <div className="text-bg-dark p-3">Dark with contrasting color</div>;
    return (
       <Card
       bgcolor="warning"
            txtcolor="black"
            header="BadBank Project"
            title="Welcome to the Bank"
            text="Let's Get Started!"
            body={(<img src="bank.png" className="img-fluid" 
            alt="Responsive image"/>)}
       />
    );
}