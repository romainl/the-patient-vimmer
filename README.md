The Patient Vimmer is my ongoing effort to write what I consider the "missing link" between `$ vimtutor` and efficient vimming.

New users too often jump directly to a stereotypical config, borrowing most of their settings and mappings from other users and installing whatever plugins and plugin managers are trending. The idea is to skip most of the mostly imaginary but very frightening learning curve and be as productive as possible as quickly as possible.

Of course, if they had taken the time to learn Vim properly, they wouldn't "need" all that cargo cult bullshit but who cares about learning? What matters is to *have* something, not to *get* it. Right?

Here is how I see this guide: a progressive exploration where successive parts build on previous ones, allowing the reader to build a few things on the way:

* a solid understanding of Vim's concepts and grammar,
* a solid vocabulary,
* a solid basic setup.

The whole thing is not ready by any means so there's no good reason to fork/clone the project if you don't want to help fix things.

A few details about the project:

* The Patient Vimmer is hosted by GitHub via its "GitHub Pages" feature. It doesn't really depend on anything "GitHub", though, so it could be moved somewhere else if needed.

* Asciidoctor's asciidoc flavor was chosen instead of Markdown because of its rich feature set and document-oriented design.

  You can read the quick reference [there](http://asciidoctor.org/docs/asciidoc-syntax-quick-reference/).

* There's a `vimrc` that is meant to contain all the settings, mappings and whatnot discussed in the guide. To use it:

        $ vim -N -u /path/to/the-patient-vimmer/vimrc

* The `playground` directory contains the [Pygments](http://pygments.org/) source code,s used throughout the guide for examples and "gifcasts".
