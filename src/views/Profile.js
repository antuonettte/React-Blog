import React, { Component } from 'react'
// import { current_user } from '../test';

export default class Profile extends Component {

    render() {

        var userData = this.props.user
        
        return (
            <div>
                <h3>
                    Profile | Welcome {userData.email}
                </h3>
                <hr />

                <div class="row">
                    <div class="col-md-4">
                        <img class="img-fluid" src="https://via.placeholder.com/150x150" alt="profile" />
                    </div>

                    <div class="col-md">
                        <form action="" method="">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder=" " required="required" name="first_name" value={userData.first_name} />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="  " required="required" name="last_name" value={userData.last_name} />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="" required="required" name="email" value="" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea class="form-control" name="bio" id="" cols="30" rows="10" placeholder="" maxlength="500">{userData.bio}</textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <input type="submit" class="btn btn-info btn-block" value="Update Profile" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-md-12">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <p>
                                        
                                </p>
                                <div>
                                    <span>
                                        <cite>&mdash; {userData.first_name} {userData.last_name}</cite>
                                        <small class="float-right"></small>
                                    </span>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        )
        


    }
}
