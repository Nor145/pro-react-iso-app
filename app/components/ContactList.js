import React, {Component, PropTypes} from 'react';

class ContactList extends Component {
  render(){
    var isData = typeof this.props.contacts == "object";
    var filteredContacts = isData && this.props.contacts.filter(
      (contact) => contact.name.indexOf(this.props.filterText) !== -1
    );
    return(
      <ul>
        {filteredContacts && filteredContacts.map(
          (contact) => <li key={contact.email}>{contact.name} - {contact.email}</li>
        )}
       </ul>
    )
  }
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string.isRequired
}

export default ContactList;