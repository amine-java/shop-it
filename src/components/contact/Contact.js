
import React from 'react';
import ContactSucces from './ContactSucces';
import './Contact.css';


class Contact extends React.Component {

    state = {
        submitedForm: false,
        name: "",
    }

    /**
     * Constructor
     */
    constructor(props) {
        super(props);
        this.doSubmit = this.doSubmit.bind(this);
    }

    /**
     * If the form has been submitted then we display the ContactSucces component, else we display
     * the form.
     */
    render() {
        if (this.state.submitedForm) {
            this.redirectAfterDisplayingSuccessContact();
            return <ContactSucces name={this.state.name} />
        }
        return (
            <div className="divForm">
                <h1>Contact us</h1>
                <form onSubmit={this.doSubmit}>
                    <input type="text" id="name" name="name" placeholder="Your name.."></input>
                    <input type="text" id="email" name="email" placeholder="Your email.."></input>
                    <input type="text" id="message" name="message" placeholder="Your message.."></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>);
    }

    /**
     * Handles the form submit; it changes the state so that the ConstactSuccess will be diplayed 
     *  
     */
    doSubmit(e) {
        e.preventDefault();
        let email = e.target.email.value;
        let name = e.target.name.value;
        let message = e.target.message.value;
        console.log(email + " " + message);
        this.setState(
            { submitedForm: true, name }
        )
    }

    /**
     * Wait 5 seconds and then redirect to the home page
     */
    redirectAfterDisplayingSuccessContact() {
        setTimeout(function () {
            this.props.history.push('/');
        }.bind(this), 5000);
    }
}
export default Contact; 