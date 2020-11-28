export default `
  {{> header}}
  <div class="commercial">
    <ul>
      <li>The first playlist is {{scream playlists.[0].title}}</li>
      <li>The second playlist is {{lookup (lookup playlists 1) 'title'}}</li>
    </ul>
  </div>
  <div id="playlists">
    {{#each playlists}}
      <div class="playlist">
        <h2>{{em title}}</h2>
        <a class="button show-playlist" data-id="{{id}}">Go to playlist</a>
        {{#noop}}{{../title}}{{/noop}}
        <div class="songs">

          {{!--
          {{#list songs id="songs"}}
            <a href="{{url}}">{{title}}</a>
          {{/list}}
          --}}

          <ul id="songs">
            {{#each songs}}
              {{#if title}}
                <li>
                  {{link (em title) url}} by {{author}} in playlist {{../title}}
                </li>
              {{else}}
                <li>
                  {{#bold}}
                    {{link "Unknown Title" ../url}}
                  {{/bold}} by {{author}}
                </li>
              {{/if}}
            {{/each}}
          </ul>
        </div>
      </div>
    {{/each}}
  </div>
`