import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import SupportTicket from './components/supportticket';
import TicketDetails from './components/ticket_details';


//created by.

const generateClassName = createGenerateClassName({
    productionPrefix: 'SupportTicket',
    productionPrefix: 'details',
  
});


export default ({ history }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route path="/supportticket/ticketdetails/:id"  component={TicketDetails} exact /> 
                    <Route path="/supportticket/list" component={SupportTicket} exact />
                    {/* <Route path="/supportticket" component={SupportTicket} exact /> */}
                    <Route path="/" exact> <SupportTicket/> </Route>
                </Switch>
            </Router>
        </StylesProvider>
   {/*  */}
       

       
    </div>
};