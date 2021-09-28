import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <h3>
                    Profile |
                </h3>
                <hr />

                <div class="row">
                    <div class="col-md-4">
                        <img class="img-fluid" src="https://via.placeholder.com/150x150" alt="profile"/>
                    </div>
                    <div class="col-md">
                        <form action="" method="">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder=" " required="required" name="first_name" value="" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="  " required="required" name="last_name" value="" />
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
                                        <textarea class="form-control" name="bio" id="" cols="30" rows="10" placeholder="" maxlength="500"></textarea>
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
            </div>
        )
    }
}
