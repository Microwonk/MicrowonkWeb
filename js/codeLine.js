const words = 
[
'Developer In Progress . . .'
, ''
, '⦿⽘⦿'
, ''
, 'Java, C++ and C# development'
, ''
, 'Vulkan, OpenGL and game developer'
, ''
, '=^_^='
, ''
, 'WebDev with PHP'
, ''
, '猫の'
, 'にゃ'
, 'if ( bowl.isEmpty() ) cat.meow();'
, '🐈'
, ''
, 'sudo rm -rf ~/'
, ''
];

var subtitleStr;
var i = 0;
var offset = 0;
var forwards = true;
var skip_count = 0;
var typeVis = false;

const skip_delay = 15;
const speed = 100;

const wordflick = () => {

    setInterval(() => {
        if (forwards && offset >= words[i].length) {
            ++skip_count;
            if (skip_count == skip_delay) {
                forwards = false;
                skip_count = 0;
            }
        }
        else if (offset == 0) {
            forwards = true;
            i++;

            if (i >= words.length) i = 0;
        }

        if (skip_count == 0) {  
            subtitleStr = ">/ " + words[i].substring(0, offset) + "|";  
            offset += forwards ? 1 : -1;
        } else {
            subtitleStr = ">/ " + words[i].substring(0, offset) + (typeVis ?  "|" : "")
            typeVis = skip_count % (speed / 20) === 0 ? !typeVis : typeVis;
        }

        $('.subtitle').text(subtitleStr);

    },speed);
};

$(document).ready(wordflick);