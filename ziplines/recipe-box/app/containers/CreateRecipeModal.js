var React = require("react");
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var AddForm = require("./addForm");

var CreateRecipeModal = React.createClass({
  getInitialState() {
    return {modalShow: false};
  },

  addRecipeToList: function(rec) {
    this.props.addRecipe(rec);
  },

  openModal: function() {
    this.setState({
      modalShow: true
    });
  },

  closeModal: function() {
    this.setState({
      modalShow: false
    });
  },

  render() {
    return (
      <div>
        <div className="addNewRecipeBtn">
          <Button bsStyle="primary" onClick={this.openModal}>
            <i className="fa fa-plus"></i>
          </Button>
          <span>Add New Recipe</span>
        </div>
        <Modal show={this.state.modalShow} bsSize="small" dialogClassName="modalStyle" aria-labelledby="contained-modal-title-sm">
          <AddForm addRecipe={this.addRecipeToList} closeModal={this.closeModal} />
        </Modal>
      </div>
    );
  }
});

module.exports = CreateRecipeModal;
