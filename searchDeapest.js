const searchDepth = () => {
    var maxDepth = 0,
        d,
        parents,
        myselector = 'ul, ol';
  
    $(myselector).each( function(i) {
      parents = $(this).parents(myselector);
      d = parents ? parents.length + 1 : 1;
      maxDepth = d > maxDepth ? d : maxDepth;
    });
    return maxDepth;
  }

  str = `<ul>
  <li>Here nesting level is one</li>
</ul>
<ol>
  <li>
    <ol>
      <li>
        <ul>
          <li>
            Here nesting level is three
          </li>
        </ul>
      </li>
    </ol>
  </li>
</ol>
<ul>
  <li>
    <ul>
      <li>
        Here it is two
      </li>
    </ul>
  </li>
</ul>`

    console.log(
        searchDepth()
    );