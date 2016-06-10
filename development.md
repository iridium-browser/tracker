---
layout: pagecentered
title: "Development"
---

How to take part in development
-------------------------------

#### Dive In ####
Sources may be obtained [as a tarball or via Git transport](download.html "download") as a tarball or via Git transport. When working with the plain tarball and without git, using a utility like quilt to track file changes and produce patches is recommended. (See below for submission.)

The Git repository features a <code>master</code> branch which points to the current patch stack, and a crbase convenience branch pointer with which we have marked the base at which we started deviating from the Chromium source code. Our tags are named <code>iridium-browser-39.0</code>, and can be used to locate older variants of our creations by release number. To find the Chromium version tag such a release is based on, use, with appropriate number substitution

> git describe --tags --match='39*'

You can add in the Chromium upstream repository as well if so desired.

> git remote add cr https://chromium.googlesource.com/chromium/src.git  
> git remote update cr

From this <code>cr</code> remote imported will be a number of branches, including <code>master</code>, which is the the top commit of the Chromium development branch, and the Chromium tags, which have a purely numerical form like <code>39.0.2171.65</code>. The Chromium tags are also copied and provided through the iridium-browser repository, so they may get retrieved from either location.

The iridium patches are linear and *rebased* onto new Chromium releases as they become available. We are not using pull+merge so as to facilitate producing patches. So far, the Chromium versions to rebase onto were chosen by the versions that appear in the openSUSE update channel.

#### Submission ####
When using quilt, you eventually end up with patch files produced by <code>`quilt refresh`</code>. These may be sent in via e-mail to the mailing list.

Git allows for multiple ways of distribution. You can choose to upload your repository to a place of your choosing and point us to the location, branch name and commit ID. To that end, git provides a subcommand to produce a convenient summary containing all that information.

> git request-pull origin/master git://your.location/ master \| mail iridium@lists.inai.de

(This presumes that your branch’s name is also “master”). There is no requirement for you to provision any form of webspace for your submissions, and as a result, there is no compulsory registration required for such; you can just send the commits themselves:

> git send-email --to iridium@lists.inai.de origin/master..master

There are many more options available, especially for when you decide to do a golden submission that is retrievable both by git: and announced with reviewable patches:

> git send-email --to iridium@lists.inai.de --compose origin/master..master

This will open your preferred editor for editing the cover letter. Into this cover letter, put the output of the above-mentioned `git request-pull` command. Some editors permit running commands from within and pasting the result into the document directly.

#### Distribution packages ####
The patch set can be exported as either a monolithic big file with commands such as…

> git diff --stat -p ir/crbase..ir/master >ir-master.diff  
> git diff --stat -p 39.0.2171.65..iridum-browser-39.0 >ir-39.0.diff

Or, to produce one file per change:

> git format-patch ir/crbase..ir/master

The so-produced diff files are then used together with a pristine source tarball to produce our per-platform builds. To that end, the [Open Build Service](http://openbuildservice.org/ "Open Build Service"), more precisely, a local instance thereof in our data centers, is used, at least for Linux builds. That code repository too, is public, at [https://build.netitwork.net/](https://build.netitwork.net/package/show/iridium/iridium-browser "code repository").

This currently features *an import* of the openSUSE chromium source RPM, which has been edited minimally to change Google API keys, build the browser suite with our patches, and of course a package rename to avoid inadvertent overlap with the existing <code>chromium</code>.

#### Locating transmissions ####
To observe whether the browser sends unwanted requests, a local HTTP proxy such as Squid is highly useful to catch such attempts at the application level, as these requests will directly appear in the proxy logs. For TLS, at least the server name can still be recovered this way. For cases when requests are being made before the proxy settings are loaded and respected, network interface packet capture mechanisms and frontends such as Wireshark/tcpdump may be used, however, they only reveal network addresses on a packet level, and need correlation with DNS queries occurring concurrently.

