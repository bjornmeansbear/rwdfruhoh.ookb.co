# RWDF Ruhoh/CAPE To dos.
_(for an example of what the site will look like when all working visit http://rwdf.ookb.co/ — this document is referring to steps needed on this repo, http://rwdfruhoh.ookb.co/)_

## Homepage.
- Need to be able to promote projects from the projects page (what we do page) feed to the 5 homepage blocks.
- These 5 blocks are to then fill randomly on each page load — so that the big featured area “rotates” each time the page is loaded/refreshed — is that possible? (there is a 6th block, which will have just text in it that I don't think needs to change)

## Who We Are.
- Place the “Hero” text in the top from one .md file
- Each “Tab” is its own Markdown file (except bios)
- Bios were created as their own files in a sub-directory; how to make these print out as a list inside the last tab here?

## What We Do.
- Place the “Hero” text in the top from one .md file
- Projects are their own content type.
- Sorted by categories: but how to get categories to print out as classes on each of the list entries? Also, how to get categories to print out as the side-nav?
- These need to be promotable someway to the homepage.

## Tell Us About You.
- Place the “Hero” text in the top from one .md file
- This form could just be coded into a template file for this page?
- How to trigger the sending of the form?
- Make the sidebar its own .md file for easy edits/updates.

## Blog.
Not part of the ruhoh/CAPE site; powered and hosted externally by wordpress.

## Additional stuff:
- How to explain editing of MD files to client
- Anyway to just grant access to the content folders, not the whole git repo?
- Multiple ways to show featured projects on homepage? (text only posts should be able to be featured somehow too?)
- Navigation links…
if I don't want to put those “pages” in the root folder, so as to make them sensically organized with the rest of the site structure; can I do that… ? I guess what I'm saying is how do I tell ruhoh those pages exists as root level pages, but put their main content also in the sub-directories I created for the other bits of the sections?
(this is important for Who We Are, What We Do, and Tell Us About You pages)

## The Theme
- Need to create template variations on individual project versions » the text only, small image, and big slideshow variants.
- If form for tell us about you goes into the template .html file for that page, how is it triggered? Does it need to be a wufoo form? is there some JS or other server solution that can trigger an email to be sent?

==========

## Problems to solve:

1. JS from theme isn't being found
2. get email form to work
3. issues with homepage rotation
4. Bios (and other tabs on Who We Are) showing up the way I desire
5. make just the folders from the repo that I want available to the clients for editing, not the whole repo...