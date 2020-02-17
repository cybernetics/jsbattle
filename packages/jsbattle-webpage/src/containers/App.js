import React, {Component} from "react";
import {Route, Redirect, HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import ChallengeListScreen from './ChallengeListScreen.js';
import ChallengeScreen from './ChallengeScreen.js';
import ScriptListScreen from './ScriptListScreen.js';
import SandboxScreen from './SandboxScreen.js';
import Navi from './Navi.js';
import Footer from './Footer.js';
import ErrorPanel from './ErrorPanel.js';
import Loading from '../components/Loading.js';


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.isLoading) {
      return <Loading />;
    }
    const router = <div>
          <Router>
            <div>
              <Route exact path="/">
                <Redirect to="/challenge" />
              </Route>
              <Route path="/" component={Navi} />
              <Route path="/" component={ErrorPanel} />
              <Route exact path="/challenge/:id" component={ChallengeScreen} />
              <Route exact path="/challenge" component={ChallengeListScreen} />
              <Route exact path="/sandbox/:name" component={SandboxScreen} />
              <Route exact path="/sandbox" component={ScriptListScreen} />
              <Route path="/" component={Footer} />
            </div>
          </Router>
        </div>;
    return router;
  }
}

App.defaultProps = {

};

App.propTypes = {

};


const mapStateToProps = (state) => ({
  isLoading: state.loading.SETTINGS
});
const mapDispatchToProps = () => ({

});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);