import React, { Component } from 'react';

export default class register extends Component {
    render() {
        return (
            
            <div>
                 <h3>Register</h3>
                 <hr />
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <form action="" method="">
                            <div class="form-group">
                                <input type="text" class="form-control" required="required" name="first_name" placeholder="First Name"/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" required="required" name="last_name" placeholder="Last Name"/>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" required="required" name="email" placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" required="required" name="password" placeholder="Password"/>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" required="required" name="confirm_password" placeholder="Confirm Password"/>
                            </div>
                            <button class="btn btn-info btn-block">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


