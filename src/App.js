
import React, { useCallback } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Main } from './components/Main'
import firebase from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';


export const App = () => {

  return (
    <React.Fragment>
      <Main />
    </React.Fragment>
  )
}