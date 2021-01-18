const request = require('request');
const express = require('express');

const app = express();

app.get('/',(req,res) => {res.send('API is running')});

app.get('/covidLatest',(req,res)=>{
    const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/totals',
        headers: {
          'x-rapidapi-key': '1f60fd7545mshd4c5a5d9b03d88bp1e2479jsn41f8f656b41f',
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
          useQueryString: true
        }
    }
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(JSON.parse(body));
    });
});

app.get('/statuson/:date',(req,res)=>{
    const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/report/totals',
        qs: {date: req.params.date},
        headers: {
          'x-rapidapi-key': '1f60fd7545mshd4c5a5d9b03d88bp1e2479jsn41f8f656b41f',
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
          useQueryString: true
        }
      };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(JSON.parse(body));
    });
})

app.get('/statusof/country/:countrycode',(req,res)=>{
    const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/country/code',
        qs: {code: req.params.countrycode},
        headers: {
          'x-rapidapi-key': '1f60fd7545mshd4c5a5d9b03d88bp1e2479jsn41f8f656b41f',
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
          useQueryString: true
        }
      };
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(JSON.parse(body));
    });
})
app.get('/listcountries',(req,res)=>{
    const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/help/countries',
        headers: {
            'x-rapidapi-key': '1f60fd7545mshd4c5a5d9b03d88bp1e2479jsn41f8f656b41f',
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
            useQueryString: true
        }
    }
    request(options, function(error, response,body){
        if (error) throw error;
        res.json(JSON.parse(body));
    });
})



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{console.log(`API running at ${PORT}`)});
