# Foundation Differentials
Foundation is a great framework with everything you need out of the box. Moving to Foundation 6, most of the file size was reduced to make it more managable to download all components. Here is a guide to show what components have changed and how. If they did not change, they are not displayed. The Javascript only works for the Foundation 6 components even though the Foundation 5 components are displayed for visuals.
## Visual Changelog
[Demo of the visual changes from Foundation 5 to 6] (http://foundation.established1992.com/)
## Display Changes
Foundation 5 attributes removed
````html
<pre><code>
  <span class="lowlight">&lt;a href=&quot;#&quot; class=&quot;close&quot;&gt;&amp;times;&lt;/a&gt;</span>
</code></pre>
````

````css
  .lowlight{
  	background:#E14242;
  	color: #000;
  }
````

Foundation 6 attributes added

````html
<pre><code>
  <span class="highlight">&lt;button class=&quot;close-button&quot; aria-label=&quot;Close alert&quot; type=&quot;button&quot;&gt;
    &lt;span aria-hidden=&quot;true&quot;&gt;&amp;times;&lt;/span&gt;
  &lt;/button&gt;</span>
</code></pre>
````

````css
.highlight{
  	background:#ffff66;
  	color: #000;
  }
````
