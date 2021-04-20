import React, { Component } from "react";


import * as Survey from "survey-react";



import "survey-react/modern.css";
import "./index.css";

Survey.StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
    constructor() {
        super();
        
    }
    render() {
        //fssadas

        

        const json = {
            questions: [
                {
                    type: "checkbox",
                    name: "strengths",
                    title: "What are our strengths?",
                    isRequired: true,
                    hasNone: true,
                    colCount: 4,
                    choices: [
                        "Good links with local governments",
                        "High level of board member involvement",
                        "Good fiscal management",
                        "Strong referral process among partner agencies",
                        "Increased partner presence (over the years)",
                        "Greater employer involvement in board activity"
                    ]
                },
                {
                    type: "checkbox",
                    name: "weaknesses",
                    title: "What are our Weaknesses?",
                    isRequired: true,
                    hasNone: true,
                    colCount: 4,
                    choices: [
                        "Size, Geography and diversity of area",
                        "Playing it too safe with projects",
                        "Not proactive in job training (future industries or jobs)",
                        "Inconsistent in core service delivery",
                        "Lack of diversity",
                        "Lack of partner presence/participation",
                        "High turnover on Board by Business Reps"
                    ]
                },
                {
                    type: "checkbox",
                    name: "weaknesses",
                    title: "What are our Opportunities?",
                    isRequired: true,
                    hasNone: true,
                    colCount: 4,
                    choices: [
                        "Minimal union activity",
                        "Availability of Federal, state and private grants",
                        "Expansion of infrastructure",
                        "Access to interstate system",
                        "Entrepreneurial activities and support",
                        "Availability of support resources, capital and business sites for start-up and small businesses",
                        "Ability to quickly add training programs",
                        "Need to “tell our story"
                    ]
                },
                {
                    type: "checkbox",
                    name: "threats",
                    title: "What are our Threats?",
                    isRequired: true,
                    hasNone: true,
                    colCount: 4,
                    choices: [
                        "Competition from other companies",
                        "A disorganized workforce development system",
                        "Lack of opportunities for recent college graduates",
                        "Lack of needed infrastructure for “knowledge based” workers",
                        "Exporting of jobs & businesses",
                        "Electronic crime (internet fraud)",
                        "Lack of partnership between business & education",
                        "Decline of corporate involvement in community activities/initiatives",
                        "Low importance of advanced education by some citizens",
                        "Poor work ethic among younger workers",
                        "Lack of basic skills (reading, writing, math) and soft skills",
                        "High drop-out rates",
                        "Declining/Aging population",
                        "Recession",
                        "Welfare system that doesn’t encourage job seeking and returning to work",
                        "Continued disregard for the environment and natural resources",
                        "Low wages"
                    ]
                }

            ]
};
const survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        console.log('Subhrajyoti', result.data);    
    });

        return (
            <Survey.Survey
                model={survey}
                //onComplete
            />
        );
    }
}

export default SurveyComponent;
