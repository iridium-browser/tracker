---
layout: pagecentered
title: "Download"
subtitle: choose your operating system
description: Download IridiumBrowser for Windows, Mac OS, OpenSUSE or Ubuntu
menu: main
id: downloads
---

<div class="post-content">
	<p><script>var download_translations={'os_detection_text':'You are running <h3 class="ua-os-name"></h3> If you are looking for a different version or if you are on another platform, please choose from the list below.','download_now_text':'Download now'};</script></p>
	<script>var downloads={"urls":{"macosx":"https://downloads.iridiumbrowser.de/macosx/iridium_browser_osx_latest.dmg","macosx_extra":"https://downloads.iridiumbrowser.de/macosx/iridium_browser_extra_osx_latest.dmg","windows":"https://downloads.iridiumbrowser.de/windows/iridiumbrowser-latest-x86.msi","windows_64bit":"https://downloads.iridiumbrowser.de/windows/iridiumbrowser-latest-x64.msi","linux":"https://spreed.me/download/spreedme-desktop-latest-linux-ia32.tar.gz","linux_64bit":"https://spreed.me/download/spreedme-desktop-latest-linux-x64.tar.gz"}};</script>

	<p class="mobile">IridiumBrowser is currently NOT available for mobile!</p>

	<div id="os-detection">
			<p data-translation="os_detection_text"></p>

		<div class="row">
			<div class="3u 1u(medium) not-small">&nbsp;</div>
			<div class="3u 5u(medium) 12u$(small)">
				<div class="select-wrapper">
					<div id="select">
						<select>
						<optgroup label="Windows">
						<option value="windows">Windows | 32-bit</option>
						<option value="windows_64bit">Windows | 64-bit</option>
						</optgroup>
						<optgroup label="Apple">
						<option value="macosx">Mac OS X | Standard</option>
						<option value="macosx_extra">Mac OS X | Extra</option>
						</optgroup>
						<optgroup label="Linux">
						<option value="linux">Linux | 32-bit</option>
						<option value="linux_64bit">Linux | 64-bit</option>
						</optgroup>
						</select>
					</div>
				</div>
			</div>
			
			<div class="3u 5u(medium) 12u$(small)">
				<div><a href="#" target="_blank" class="button-do-download button fit download"><span data-translation="download_now_text"></span></a></div>
			</div>
			<div class="3u 1u(medium) not-small">&nbsp;</div>
		</div>
		
	</div>
</div>

<script>(function($){$(function(){$('[data-translation]').each(function(index,node){var $node=$(node);var translation_key=$node.attr("data-translation");var translation=download_translations[translation_key];if(translation){$node.html(translation);}});var os_maps={"CentOS":"Linux","Fedora":"Linux","Debian":"Linux","DragonFly":"Linux","Gentoo":"Linux","Linux":"Linux","Mandriva":"Linux","Mint":"Linux","RedHat":"Linux","Slackware":"Linux","SUSE":"Linux","Ubuntu":"Linux","VectorLinux":"Linux",};for(var map_key in os_maps){if(os_maps.hasOwnProperty(map_key)){var map_value=os_maps[map_key];delete os_maps[map_key];var map_key_clean=map_key.toLowerCase().replace(/ /g,"");os_maps[map_key_clean]=map_value;}}
var $detection=$("#os-detection");var parser=new UAParser();var result=parser.getResult();var is_64_bit=(function(){if(result.cpu&&result.cpu.architecture&&result.cpu.architecture.indexOf("64")!==-1){return true;}
return false;})();var os_name=result.os.name;if(os_name){var os_name_clean=os_name.toLowerCase().replace(/ /g,"");var found_in_maps=os_maps[os_name_clean];if(found_in_maps){os_name=found_in_maps;os_name_clean=os_name.toLowerCase().replace(/ /g,"");}
var $select=$detection.find("#select select");$detection.find("#select").append($select);if($select.find('option[value="'+os_name_clean+'"]').length>0){$(".button-do-download").click(function(e){var $this=$(this);var $option=$select.find('option:selected');var value=$option.attr("value");var url=downloads.urls[value];if(!url){e.preventDefault();return;}
$this.attr("href",url);});if(is_64_bit&&$select.find('option[value="'+os_name_clean+'_64bit"]').length>0){os_name+=" | 64-bit";os_name_clean+="_64bit";}
$detection.find(".ua-os-name").text(os_name);$select.val(os_name_clean);$detection.show();}}});})(jQuery);</script>

<hr>
 
<div class="icon dl fa-windows"></div>
<header>
	<h3>Windows</h3>
	<p>current version 54.0</p>
</header>
<div class="row">
	<div class="3u 2u(large) 1u(medium) not-small">&nbsp;</div>
	<div class="3u 4u(large) 5u(medium) 12u$(small) align-center"><a class="button small fit download icon fa-download" href="https://downloads.iridiumbrowser.de/windows/iridiumbrowser-latest-x86.msi" title="download 32-bit Version">32-bit Download</a></div>
	<div class="3u 4u(large) 5u(medium) 12u$(small) align-center"><a class="button small fit download icon fa-download" href="https://downloads.iridiumbrowser.de/windows/iridiumbrowser-latest-x64.msi" title="download 64-bit Version">64-bit Download</a></div>
	<div class="3u 2u(large) 1u(medium) not-small">&nbsp;</div>
</div>
<br/>
If you are looking for previous versions, please check out the <a href="https://downloads.iridiumbrowser.de/windows/" target="_blank">Builds Archive</a><br/>

<p>system requirements<br/>
&#8226; Windows 7, 8, 8.1, 10 or later<br/>
&#8226; An Intel Pentium 4 processor or later that's SSE2 capable</p>
  
<hr>

<div class="icon dl fa-apple"></div>
<header>
	<h3>Mac OS X</h3>
	<p>current version 51.1</p>
</header>
<div class="row" style="margin-top: -1.5em;">
	<div class="3u 2u(large) 1u(medium) not-small">&nbsp;</div>
	<div class="3u 4u(large) 5u(medium) 12u$(small) align-center"><header>
		<h4>Standard Release</h4>
		<p>(<em>free media codecs only</em>)</p>
	</header>
		<a class="button small fit download icon fa-download" href="https://downloads.iridiumbrowser.de/macosx/51.1.0/iridium_browser_51.1.0_osx_x64.dmg" title="download Standard Release">Standard Download</a></div>
	<div class="3u 4u(large) 5u(medium) 12u$(small) align-center"><header>
		<h4>Extra Release</h4>
		<p>(<em>includes non-free media codecs</em>)</p>
	</header>
		<a class="button small fit download icon fa-download" href="https://downloads.iridiumbrowser.de/macosx/51.1.0/iridium_browser_extra_51.1.0_osx_x64.dmg" title="download Extra Release">Extra Download</a></div>
	<div class="3u 2u(large) 1u(medium) not-small">&nbsp;</div>
</div>
<br>
If you are looking for previous versions, please check out the <a href="https://downloads.iridiumbrowser.de/macosx/" target="_blank">Builds Archive</a><br/>
  
<p>system requirements<br/>
&#8226; OS X Mavericks 10.9 or later</p>
   
<hr>
  
<div class="icon dl fa-database"></div>
<header>
	<h3>Repository for openSUSE 13.1</h3>
	<p>current version 51.1</p>
</header>

	zypper ar https://downloads.iridiumbrowser.de/openSUSE_Leap_42.1/ iridium
	zypper in iridium-browser
     
<p>system requirements<br/>
&#8226; An Intel Pentium 4 processor or later that's SSE2 capable</p>
     
<hr> 
  
<div class="icon dl fa-database"></div>
<header>
	<h3>Repository for openSUSE 13.2</h3>
	<p>current version 51.1</p>
</header>

	zypper ar http://build.netitwork.net:82/iridium/openSUSE_13.2/ iridium  
	zypper in iridium-browser
    
<p>system requirements<br/>
&#8226; An Intel Pentium 4 processor or later that's SSE2 capable</p>
     
<hr>
  
<div class="icon dl fa-linux"></div> 
<header>
	<h3>Repository for Ubuntu</h3>
	<p>current version 51.1</p>
</header>

    wget -qO - https://downloads.iridiumbrowser.de/ubuntu/iridium-release-sign-01.pub|sudo apt-key add -
    sudo apt-add-repository 'https://downloads.iridiumbrowser.de/ubuntu main'
    sudo apt-get update
    sudo apt-get install iridium-browser
     
<p>System Requirements<br/>
&#8226; 64-bit Ubuntu 14.04+<br/>
&#8226; An Intel Pentium 4 processor or later that's SSE2 capable</p>
     
<hr>
  
<div class="icon dl fa-github"></div>
<header>
	<h3>Git Repository</h3>
	<p>Clone the source code with Git</p>
</header>

    git clone https://git.iridiumbrowser.de/git/iridium-browser

<p>Browse the source code with your browser<br/>
Git web view <a href="https://git.iridiumbrowser.de/cgit.cgi/iridium-browser/" target="_blank">https://git.iridiumbrowser.de/cgit.cgi/iridium-browser/</a></p>
  
<hr>
  
<div class="icon dl fa-code"></div>
<header>
<h3>Source Code</h3>
</header>
<p>Download at <a href="https://downloads.iridiumbrowser.de/source/" target="_blank">https://downloads.iridiumbrowser.de/source/</a></p>

