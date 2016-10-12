# react-simple-form-gem

react component compatible with simple_form gem

## DateTime

```javascript
import React from 'react';
import { DateTimeInput } from 'react-simple-form-gem';

// or import SimpleForm from 'react-simple-form'
// and use like <SimpleForm.DateTimeInput />

class BookRevisionList extends React.Component {
  render() {
    return (
      <div>
        <FormGroup>
          <Label>name</Label>
          <input type="text" name="book[revisions_attributes[0][name]" />
        </FormGroup>
        <FormGroup>
          <Label>released_at</Label>
          <DateTimeInput datetime={new Date()}
                         name="released_at"
                         object="book[revisions_attributes][0]" />
        </FormGroup>
      </div>
    )
  }
}

```
