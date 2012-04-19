
DESCRIPTION
tiSlider (for jQuery) is a simple slider plugin.

DEPENDENCIES:
none

INCLUSIONS:
You have to include tiSlider.min.js (or tiSlider.js), jQuery 1.7 or higher,
tiSlider.css, you also have to copy the tiSliderImage folder in your  web root folder.

HTML:
<div  class="slider">
    <ul>
        <li>
            <a class="slider_text" href="#">
				Link1
            </a>
        </li>
        <li>
            <a class="slider_text" href="#" >
				Link2
			</a>
        </li>
        <li>
            <a class="slider_text" href="#">
				Link3
            </a>
        </li>
        <li>
            <a class="slider_text" href="#">
				Link4
            </a>
        </li>
    </ul>
    <div class="slider_image">
        <img src=".image1.png" alt="alt1"/>
        <img src=".image2.png" alt="alt2"/>
        <img src=".image3.png" alt="alt3"/>
        <img src=".image4.png" alt="alt4"/>
    </div>
</div>
You can put as much image as you want but you have to put the same numbre of <li>.


JS CALL:
put the following javascript after your sliders. you can only customize their width at the moment.
<script type="text/javascript">
    $('.slider').sliderBox({
        width: 910
    });
</script>