// Copyright (c) 2022 Timothy Manwell All rights reserved
//
// Created by: Timothy Manwell
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment6/sw.js", {
    scope: "/ICS2O-Assignment6/",
  })
}

const getFact = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)
    document.getElementById("fact").innerHTML = jsonData.facts
      
  } catch (err) {
    console.log(err)
  }
}
getFact(
  "https://dogapi.dog/api/facts"
)
