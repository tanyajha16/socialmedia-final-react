import React, { Component } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';


export default class FilesUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: ''
        }
    }

    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        axios.post("http://localhost:4000/api/user-profile", formData, {
        }).then(res => {
            console.log("hey",res);

        })
    }


    render() {
        // const{data.data.userCreated:profileImg}
       
        return (
            <div>
            {/* <div style={{width:100,height:100}}>
                {this.state.profileImg}
            </div> */}
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}
// function mapStateToProps() {
//     return {
      
//     };
//   }
//   export default connect(mapStateToProps)(FilesUploadComponent);