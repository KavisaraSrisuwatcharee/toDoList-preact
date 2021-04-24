import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';

const cardPage = () => {
    return (
      <div>
        <Card>
          <div class="card-header">
              <h1>hello</h1>
            {/* <h2 class=" mdc-typography--title">Title</h2>
            <div class=" mdc-typography--caption">Caption</div> */}
          </div>
          {/* <Card.Media className="card-media" />
          <Card.Actions>
            <Card.ActionButtons>
              <Card.ActionButton>OK</Card.ActionButton>
            </Card.ActionButtons>
            <Card.ActionIcons>
              <Card.ActionIcon>share</Card.ActionIcon>
            </Card.ActionIcons>
          </Card.Actions> */}
        </Card>
      </div>
    );
}
export default cardPage;