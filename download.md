---
layout: pagecentered
title: "Download"
subtitle: choose your operating system
description: Download IridiumBrowser for Windows, Mac OS, Ubuntu/Debian or OpenSUSE
menu: main
id: downloads
---

<p class="mobile"><span class="fa fa-warning"></span> IridiumBrowser is <u>not</u> available for iOS, Android, Windows Phone or any other mobile OS!</p>
 
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
&#8226; Windows 7 or later<br/>
&#8226; An Intel Pentium 4 processor or later that's SSE2 capable</p>
     
<p>Windows Installer provided by <a href="http://www.advancedinstaller.com/" target="_blank">Advanced Installer</a></p>
	 
<hr>

<div class="icon dl fa-apple"></div>
<header>
	<h3>Mac OS X</h3>
	<p>current version 51.1</p>
</header>
<div class="row" style="margin-top: -1.5em;">
	<div class="3u 2u(large) 1u(medium) not-small">&nbsp;</div>
	<div class="3u 4u(large) 5u(medium) 12u$(small) align-center">
	<header>
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
&#8226; OS X Mavericks 10.9+</p>
    
<hr>
   
<div class="icon dl fa-linux"></div> 
<header>
	<h3>Repository for Ubuntu / Debian</h3>
	<p>current version 54.0</p>
</header>

	wget -qO - https://downloads.iridiumbrowser.de/ubuntu/iridium-release-sign-01.pub|sudo apt-key add -
	cat <<EOF | sudo tee /etc/apt/sources.list.d/iridium-browser.list
	deb [arch=amd64] https://downloads.iridiumbrowser.de/deb/ stable main
	#deb-src https://downloads.iridiumbrowser.de/deb/ stable main
	EOF
	sudo apt-get update
	sudo apt-get install iridium-browser
     
<p>system requirements<br/>
&#8226; 64-bit Ubuntu 14.04+ / Debian 8+<br/>
&#8226; An Intel Pentium 4 processor or later that's SSE2 capable</p>
   
<hr>
  
<div class="dlinux fl-opensuse"></div>
<header>
	<h3>Repositories for openSUSE</h3>
	<p>current version 54.0</p>
</header>

<h3>Leap 42.1</h3>
	
	zypper ar https://downloads.iridiumbrowser.de/openSUSE_Leap_42.1/ iridium
	zypper in iridium-browser
     
<h3>Leap 42.2</h3>
	
	zypper ar https://downloads.iridiumbrowser.de/openSUSE_Leap_42.2/ iridium
	zypper in iridium-browser
     

<h3>13.2</h3>

	zypper ar https://downloads.iridiumbrowser.de/openSUSE_13.2/ iridium  
	zypper in iridium-browser

<h3>Tumbleweed</h3>

	zypper ar https://downloads.iridiumbrowser.de/openSUSE_Tumbleweed/ iridium  
	zypper in iridium-browser
    
<p>system requirements<br/>
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

