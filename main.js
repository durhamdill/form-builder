// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------

let fieldsDiv = document.querySelector("#fields");

function buildForm() {
for (let object=0; object<formData.length; object++) {

  if (formData[object].type === "select") {
    // create select field and add attributes
    let select = document.createElement("select");
    select.setAttribute("type", formData[object].type);
    select.setAttribute("id", formData[object].id);
    select.setAttribute("placeholder", formData[object].label);
    fieldsDiv.appendChild(select);

    // create loop to run through options array and convert each object to an option node
    let firstOption = document.createElement("option");
    let firstOptionText = document.createTextNode("Select language...");
    firstOption.appendChild(firstOptionText);
    select.appendChild(firstOption);

    for (let x=0; x<formData[object].options.length; x++) {

      // create option choices for select field
      let option = document.createElement("option");
      let optionText = document.createTextNode(formData[object].options[x].label);
      option.appendChild(optionText);
      option.setAttribute("value", formData[object].options[x].value);
      option.setAttribute("placeholder", formData[object].options[x].label);
      select.appendChild(option);

      // assign new option choices to parent
    }
    }

    else if (formData[object].type === "textarea"){
      let textarea = document.createElement("textarea");
      textarea.setAttribute("type", formData[object].type);
      textarea.setAttribute("id", formData[object].id);
      textarea.setAttribute("placeholder", formData[object].label);
      fieldsDiv.appendChild(textarea);
    }
    else {

    // create input item/field
    let input = document.createElement("input");

    // add attributes to each input
    input.setAttribute("type", formData[object].type);
    input.setAttribute("id", formData[object].id);
    input.setAttribute("placeholder", formData[object].label);

    // make input fields children of #fields div
    fieldsDiv.appendChild(input);
  }

}
}

buildForm();

// let portfolioList = document.querySelector( "#portfolio ul" );
//
// for( let i = 0; i < portfolioData.length; i++ ){
//
//     let li       = document.createElement( "li" );
//     let liImg    = document.createElement( "img" );
//     let liH2     = document.createElement( "h2" );
//     let liH2Text = document.createTextNode( portfolioData[ i ].h2 );
//
//     liH2.appendChild( liH2Text );
//
//     liImg.setAttribute( "src", portfolioData[ i ].img );
//
//     li.appendChild( liImg );
//     li.appendChild( liH2 );
//
//     portfolioList.appendChild( li );
// }
