import Vue from 'vue'

const baseUrl1 = "http://httpbin.org"

export default {
  testServer: {
    Vue.$http.http.create({
      baseUrl: baseUrl1
    })
  }
}