import React from 'react';

class GoogleTranslate extends React.Component {
    state = {}

    googleTranslateElementInit = () => {

     return new window.google.translate.TranslateElement({
            pageLanguage: 'pt',
            layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT
        }, 'google_translate_element')
    };

    componentDidMount () {
        window.googleTranslateElementInit = this.googleTranslateElementInit
    }

    render() {
        return <div>
            <script type='text/javascript'
                    src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'/>

            <div id="google_translate_element">dfssdf</div>
        </div>

    }
}

export default GoogleTranslate