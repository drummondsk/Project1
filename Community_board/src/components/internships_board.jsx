import React from "react";
import Event from './Event';



const Internship = () => {
    return (
        <div className="Internship">
            <table>
                <thead>
                    <tr>
        
                    </tr>         
                </thead>
                <tbody>
                <tr>
                    <td>
                        <Event company='Google' role = 'Software Engineer Intern' pic = './src/assets/Images/google_logo.png' location='Los Angeles, CA'/>   
                    </td>
                    <td>
                        <Event company='Apple' role = 'IOS Engineer Intern' pic = './src/assets/Images/apple_logo.png' location='Los Angeles, CA'/>   
                    </td>
                    <td>
                        <Event company='Goldman Sachs'role ='Summer Analyst Intern' pic = './src/assets/Images/boa.png' location='Dallas, TX'/>   
                    </td>
                    <td>
                        <Event company='Meta' role='IOS Engineer intern' pic = './src/assets/Images/meta.png' location='Los Angeles, CA'/>   
                    </td> 
                </tr>
                <tr>
                    <td>
                        <Event company='Amazon'role= 'SDE Intern' pic = './src/assets/Images/amazon_logo.png' location='Houston, TX'/>   
                    </td>
                    <td>
                        <Event company='Exxon Mobil'role='IT Intern' pic = './src/assets/Images/ExxonMobil.png' location='Houston, TX'/>   
                    </td>
                    <td>
                        <Event company='Netflix'role='Software Engineering Intern' pic = './src/assets/Images/netflix_logo.png' location='San Fransico, CA'/>   
                    </td>
                    <td>
                        <Event company='JP Morgan'role='Summer analyst' pic = './src/assets/Images/jpmorgan.png' location='Cincinati, OH'/>   
                    </td>
                </tr>
                <tr>
                    <td>
                        <Event company='Capital One'role='Software Engineering Intern' pic = './src/assets/Images/capital_one_logo.png' location='Houston, TX'/>   
                    </td>
                    <td>
                        <Event company='John Deere' role='Software Engineer Intern' pic = './src/assets/Images/john_deere_logo.png' location='Des Moines, IA'/>   
                    </td>
                    <td>
                        <Event company='Johnson & Johnson' role='QA Tester'pic = './src/assets/Images/j&j_logo.png' location='San Fransico, CA'/>   
                    </td>
                    <td>
                        <Event company='TikTok' role='Software Engineer Intern' pic = './src/assets/Images/tiktok.png' location='Dallas, TX'/>   
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        
    )
}

export default Internship;