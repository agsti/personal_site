import React from 'react';

const AndroidIcon = (color, key) => {
    return <svg key={key} viewBox="0 0 128 128">
        <path fill={color} d="M21.005 43.003c-4.053-.002-7.338 3.291-7.339 7.341l.005 30.736c.001 4.064 3.288 7.344 7.342 7.343 4.056 0 7.342-3.28 7.338-7.342v-30.741c-.002-4.049-3.291-7.339-7.346-7.337m59.193-27.602l5.123-9.355c.273-.489.094-1.111-.401-1.388-.5-.265-1.117-.085-1.382.407l-5.175 9.453c-4.354-1.938-9.227-3.024-14.383-3.019-5.142-.005-10.013 1.078-14.349 3.005l-5.181-9.429c-.269-.497-.889-.677-1.378-.406-.498.269-.681.892-.404 1.38l5.125 9.349c-10.07 5.193-16.874 15.083-16.868 26.438l66.118-.008c.002-11.351-6.79-21.221-16.845-26.427m-31.256 14.457c-1.521-.003-2.763-1.241-2.763-2.771 0-1.523 1.238-2.775 2.766-2.774 1.533-.001 2.773 1.251 2.775 2.774 0 1.528-1.243 2.77-2.778 2.771m30.106-.005c-1.528.002-2.772-1.237-2.772-2.771.006-1.52 1.242-2.772 2.773-2.778 1.521.005 2.768 1.258 2.767 2.779.003 1.53-1.24 2.771-2.768 2.77m-47.853 14.537l.011 47.635c-.003 4.333 3.502 7.831 7.832 7.831l5.333.002.006 16.264c-.001 4.05 3.291 7.342 7.335 7.342 4.056 0 7.342-3.295 7.343-7.347l-.004-16.26 9.909-.003.004 16.263c0 4.047 3.293 7.346 7.338 7.338 4.056.003 7.344-3.292 7.343-7.344l-.005-16.259 5.352-.004c4.32.002 7.834-3.5 7.836-7.834l-.009-47.635-65.624.011zm83.134 5.943c-.001-4.055-3.286-7.341-7.341-7.339-4.053-.004-7.337 3.287-7.337 7.342l.006 30.738c-.001 4.058 3.283 7.338 7.339 7.339 4.054-.001 7.337-3.281 7.338-7.343l-.005-30.737z"></path>
    </svg>
};

const ReactIcon = (color, key) => (
    <svg key={key} viewBox="0 0 128 128">
        <path fill={color} d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
    </svg>
);

const JavaIcon = (color, key) => (
    <svg key={key} viewBox="0 0 128 128">
        <path fill={color} d="M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.351-6.874-3.351-10.897 2.06-15.952 2.222-25.844 1.092-8.164-.935-3.397-3.71-3.397-3.71zM80.806 87.66c-14.444 2.779-22.787 2.69-33.354 1.6-8.171-.845-2.822-4.805-2.822-4.805-21.137 7.016 11.767 14.977 41.309 6.336-3.14-1.106-5.133-3.131-5.133-3.131zM92.125 27.085c.001 0-42.731 10.669-22.323 34.187 6.024 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.634-29.58zM102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.095.171-4.45-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.952-3.487-32.013 6.85-13.742 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM85 77.896c2.395-1.634 5.703-3.053 5.703-3.053s-9.424 1.685-18.813 2.474c-11.494.964-23.823 1.154-30.012.326-14.652-1.959 8.033-7.348 8.033-7.348s-8.812-.596-19.644 4.644c-12.812 6.195 31.691 9.019 54.733 2.957zM90.609 93.041c-.108.29-.468.616-.468.616 31.273-8.221 19.775-28.979 4.822-23.725-1.312.464-2 1.543-2 1.543s.829-.334 2.678-.72c7.559-1.575 18.389 10.119-5.032 22.286zM64.181 70.069c-4.614-10.429-20.26-19.553.007-35.559 25.271-19.947 12.304-32.923 12.304-32.923 5.23 20.608-18.451 26.833-26.999 39.667-5.821 8.745 2.857 18.142 14.688 28.815zM91.455 121.817c-19.187 3.612-42.854 3.191-56.887.874 0 0 2.874 2.38 17.646 3.331 22.476 1.437 57-.8 57.816-11.436.001 0-1.57 4.032-18.575 7.231z"></path>
    </svg>
);

const JSIcon = (color, key) => (
    <svg key={key} viewBox="0 0 128 128">
        <path fill={color} d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
    </svg>
);

const DockerIcon = (color, key) => (
    <svg key={key} viewBox="0 0 128 128">
        <path fill={color} d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2h-6.7v-14.1h-13v-25h-15v12h-25v13h-13v14h-11.2l-.2 1.5c-.5 6.4.3 12.6 3 18.5l1.1 2.2.1.2c7.9 13.4 21.7 19 36.8 19 29.2 0 53.3-13.1 64.3-40.6 7.4.4 15-1.8 18.6-8.9l.9-1.8-1.6-1zm-96.8-13.1h10v11h-10v-11zm13.1 44.2c0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7.1 3.1 1.4 3.1 3.1zm-13.1-31.2h10v11h-10v-11zm-13 0h11v11h-11v-11zm27.7 50.2c-15.8-.1-24.3-5.4-31.3-12.4 2.1.1 4.1.2 5.9.2 1.6 0 3.2 0 4.7-.1 3.9-.2 7.3-.7 10.1-1.5 2.3 5.3 6.5 10.2 14 13.8h-3.4zm8.3-39.2h-11v-11h11v11zm0-13h-11v-11h11v11zm13 13h-11v-11h11v11zm0-13h-11v-11h11v11zm0-13h-11v-11h11v11zm13 26h-11v-11h11v11zM38.8 81.2c-.2-.1-.5-.2-.8-.2-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2c0-.3-.1-.6-.2-.8-.2.3-.4.5-.8.5-.5 0-.9-.4-.9-.9.1-.4.3-.7.5-.8z"></path>
    </svg>
);

const PythonIcon = (color, key) => (
    <svg key={key} viewBox="0 0 128 128">
        <path fill={color} d="M49.33 62h29.159c8.117 0 14.511-6.868 14.511-15.019v-27.798c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191-12.355 2.181-14.453 6.751-14.453 15.176v10.817h29v4h-40.224000000000004c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53 2.075 8.642 7.03 14.659 15.515 14.659h9.946v-13.048c0-9.637 8.428-17.952 18.33-17.952zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zM122.281 48.811c-2.098-8.448-6.103-14.811-14.599-14.811h-10.682v12.981c0 10.05-8.794 18.019-18.511 18.019h-29.159c-7.988 0-14.33 7.326-14.33 15.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0 7.349-2.129 14.487-6.411 14.487-14.834v-11.126h-29v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path>
    </svg>
)

const GitIcon = (color, key) => (
    <svg key={key} viewBox="0 0 128 128">
        <path fill={color} d="M124.737 58.378l-55.116-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.444 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.048-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.934-.933 2.014-1.638 3.167-2.11v-34.659c-1.153-.472-2.231-1.172-3.167-2.111-2.862-2.86-3.551-7.06-2.083-10.576l-14.313-14.313-37.792 37.79c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327-.001-11.501z"></path>
    </svg>
)

const PgIcon = (color, key) => (
    <svg key={key} viewBox="0 0 128 128">
        <path fillRule="evenodd" clipRule="evenodd" fill={color} d="M123.258 76.784c-.45-2.918-2.901-4.829-5.752-4.958-1.032-.047-2.08.061-3.109.192-1.243.158-2.471.438-3.711.623-.857.128-1.726.187-2.582.275l-.021-.111c1.598-3.018 3.263-6.003 4.775-9.064 1.159-2.348 2.151-4.781 3.176-7.194 1.696-3.998 3.051-8.12 4.173-12.309 1.075-4.011 1.995-8.066 2.284-12.227.116-1.662.196-3.331.187-4.995-.008-1.327-.151-2.656-.284-3.979-.15-1.516-.608-2.953-1.242-4.336-.836-1.822-2.132-3.317-3.496-4.737-1.092-1.137-2.293-2.173-3.484-3.208-1.698-1.477-3.607-2.656-5.59-3.703-2.253-1.19-4.621-2.121-7.09-2.75-1.493-.381-3.02-.664-4.532-.966-.544-.11-1.089-.337-1.633-.337h-10.241c-.37 0-.737.191-1.11.233-2.452.273-4.875.735-7.228 1.464-.88.273-1.684.101-2.52.024-.641-.059-1.271-.231-1.912-.263-2.442-.122-4.887-.301-7.328-.275-2.339.024-4.654.409-6.918 1.052-1.895.538-3.749 1.195-5.447 2.191-.727.426-1.303.346-2.055.129-2.527-.729-5.072-1.414-7.639-1.989-1.6-.358-3.245-.536-4.879-.707-1.566-.163-3.144-.261-4.718-.294-1.538-.033-3.087-.032-4.618.104-2.439.217-4.832.713-7.158 1.513-2.583.888-4.951 2.175-7.086 3.865-2.167 1.715-3.905 3.809-5.303 6.2-1.473 2.523-2.483 5.224-3.111 8.061-.34 1.537-.555 3.117-.788 4.678-.073.486.732.972-.268 1.456v6.794c1 .452.208.903.266 1.356.139 1.089.262 2.187.446 3.268.291 1.711.636 3.417.988 5.117.491 2.375 1.002 4.748 1.546 7.111.396 1.72.847 3.43 1.319 5.131.721 2.598 1.431 5.201 2.246 7.77.757 2.387 1.624 4.74 2.484 7.093 1.191 3.255 2.617 6.405 4.327 9.424 1.479 2.614 3.169 5.062 5.436 7.076 1.494 1.327 3.157 2.347 5.093 2.857 1.521.4 3.067.448 4.624.129 1.805-.37 3.403-1.147 4.824-2.311.163-.134.342-.236.535.01.735.931 1.719 1.552 2.748 2.089 2.777 1.448 5.803 1.882 8.877 2.059.744.043 1.496-.064 2.246-.085 1.461-.04 2.881-.325 4.278-.729.732-.212 1.447-.481 2.192-.732.039.793.089 1.557.112 2.321l.104 4.166c.019.634.044 1.27.103 1.901.151 1.627.299 3.255.493 4.877.135 1.118.275 2.245.538 3.336.529 2.203 1.246 4.348 2.158 6.428.895 2.041 2.182 3.764 3.9 5.185 2.22 1.836 4.822 2.619 7.632 2.764 1.162.061 2.357.004 3.501-.204 1.813-.329 3.622-.743 5.387-1.275 3.591-1.084 6.695-2.956 9.014-5.981 1.32-1.724 2.404-3.589 3.1-5.648.574-1.701 1.115-3.419 1.545-5.16.34-1.372.508-2.787.715-4.188.137-.927.219-1.863.305-2.797.14-1.517.283-3.033.384-4.553.07-1.058.067-2.121.109-3.181.013-.323.065-.644.095-.966.028-.298.178-.401.482-.396 1.071.016 2.144.044 3.212-.004 1.197-.054 2.405-.105 3.583-.303 1.677-.281 3.346-.636 4.99-1.067 1.943-.508 3.725-1.418 5.44-2.455 1.998-1.207 3.819-2.623 5.297-4.447 1.285-1.591 1.894-3.43 1.584-5.438zm-3.412.982c-.066.915-.485 1.699-1.093 2.369-2.869 3.163-6.468 5.082-10.585 6.027-1.564.358-3.178.544-4.779.692-1.363.126-2.746.147-4.114.097-1.006-.038-2.004-.268-3.032-.416-.103.94-.201 1.919-.32 2.896l-.479 3.745c-.145 1.187-.258 2.378-.407 3.564-.146 1.151-.328 2.298-.481 3.449-.143 1.072-.248 2.149-.407 3.219-.245 1.64-.479 3.284-.799 4.911-.384 1.945-.973 3.829-1.934 5.583-1.172 2.141-2.834 3.772-4.949 4.98-2.18 1.246-4.563 1.894-6.979 2.436-1.71.384-3.472.447-5.204.291-3.004-.272-5.568-1.557-7.506-3.886-1.85-2.223-3.102-4.771-3.55-7.655-.214-1.371-.368-2.754-.491-4.136-.136-1.537-.229-3.079-.299-4.62-.089-1.957-.154-3.914-.197-5.871-.053-2.406-.07-4.812-.104-7.218l-.006-.092c-1.224.734-2.427 1.538-3.703 2.2-1.494.776-3.117 1.226-4.798 1.353-1.318.1-2.653.191-3.965.086-2.151-.173-4.3-.51-6.226-1.569-.781-.43-1.596-.953-2.134-1.64-1.29-1.646-.672-3.726 1.273-4.727 1.344-.693 2.811-.982 4.268-1.319 1.266-.293 2.526-.626 3.761-1.029 1.222-.4 1.993-1.391 2.754-2.363l1.206-1.551c-.503-.053-.977-.107-1.451-.151-1.439-.136-2.812-.532-4.125-1.114-1.124-.497-1.141-.551-1.965.343-1.376 1.494-2.714 3.023-4.062 4.542-.992 1.117-1.978 2.241-2.965 3.361-.978 1.108-1.894 2.279-2.947 3.31-1.564 1.531-3.449 2.452-5.698 2.348-1.443-.066-2.764-.572-3.952-1.399-2.452-1.708-4.104-4.097-5.608-6.606-1.927-3.215-3.406-6.64-4.672-10.159-.876-2.432-1.756-4.866-2.521-7.333-.831-2.681-1.56-5.396-2.277-8.11-.542-2.048-1.023-4.113-1.482-6.182-.521-2.353-1.022-4.71-1.464-7.079-.298-1.599-.471-3.221-.712-4.831-.325-2.17-.385-4.36-.267-6.539.105-1.963.387-3.921.667-5.871.388-2.698 1.277-5.244 2.556-7.648.783-1.473 1.755-2.812 2.879-4.056 1.845-2.042 4.078-3.518 6.562-4.626 1.736-.774 3.57-1.24 5.439-1.604 2.774-.54 5.573-.519 8.373-.461 1.224.025 2.443.248 3.666.369 2.633.262 5.214.816 7.762 1.5 1.857.498 3.676 1.143 5.518 1.703.185.056.456.051.607-.048 2.496-1.629 5.224-2.704 8.125-3.319 1.101-.233 2.237-.335 3.363-.407 1.369-.087 2.749-.167 4.115-.088 1.642.094 3.276.336 4.908.56.792.108 1.565.383 2.359.458.38.036.783-.242 1.185-.335 2.049-.473 4.089-1 6.156-1.374 1.539-.278 3.111-.409 4.676-.499 1.745-.1 3.503-.173 5.247-.089 2.205.106 4.394.42 6.555.923 2.677.623 5.245 1.528 7.686 2.784 1.824.938 3.558 2.026 5.119 3.364 1.023.878 2.07 1.745 2.994 2.723 1.14 1.206 2.303 2.413 3.018 3.958.538 1.165.922 2.371 1.028 3.647.132 1.586.292 3.178.277 4.766-.014 1.519-.221 3.037-.368 4.552-.334 3.454-1.085 6.833-1.997 10.167-.754 2.754-1.635 5.478-2.589 8.17-.879 2.481-1.893 4.917-2.918 7.343-.757 1.794-1.572 3.569-2.458 5.303-1.677 3.286-3.421 6.538-5.438 9.633-.348.535-.678 1.083-1.018 1.629.88.594 1.877.803 2.881.911.955.104 1.929.166 2.883.095 1.527-.113 3.049-.331 4.567-.544 1.504-.21 2.978-.638 4.522-.525 1.542.112 2.645 1.284 2.54 2.729zM97.833 74.413c-.655-.846-1.323-1.682-1.964-2.538-1.006-1.344-1.729-2.845-2.455-4.353-.688-1.429-1.532-2.782-2.257-4.195-1.265-2.465-2.553-4.922-3.718-7.435-1.465-3.157-2.62-6.426-2.984-9.923-.154-1.48-.193-2.958.106-4.424.479-2.341 1.702-4.172 3.758-5.428 1.907-1.165 4.032-1.541 6.209-1.659 1.351-.073 2.708-.013 4.11-.013l-.047-.237c-.872-1.823-1.687-3.677-2.641-5.457-1.346-2.512-3.068-4.777-4.986-6.877-1.421-1.555-2.96-2.998-4.646-4.273-1.658-1.255-3.405-2.376-5.269-3.293-2.223-1.093-4.538-1.938-6.967-2.477-2.334-.518-4.683-.835-7.077-.861-2.042-.022-4.071.07-6.06.531-3.002.695-5.748 1.931-8.137 3.933-1.334 1.118-2.498 2.373-3.517 3.77-1.196 1.643-2.161 3.417-2.986 5.277-1.132 2.552-1.909 5.208-2.44 7.938-.266 1.361-.474 2.734-.686 4.106-.074.48-.08.971-.123 1.521.369-.192.635-.34.907-.472l.885-.397c2.993-1.369 6.094-2.25 9.427-2.149 1.416.043 2.771.323 4.03.943 2.415 1.191 3.828 3.216 4.442 5.779.424 1.769.714 3.573.996 5.372.221 1.405.447 2.825.473 4.242.037 2.071-.068 4.146-.181 6.216-.096 1.764-.464 3.5-1.08 5.146-1.12 2.993-2.368 5.937-3.534 8.913-.385.983-.681 2.001-1.045 3.082.562 0 1.018-.004 1.474.002.178.003.36.008.532.049 1.34.316 2.502.923 3.455 1.954 1.271 1.372 1.938 2.973 1.972 4.826.019 1.027-.089 2.057-.084 3.084.021 4.786.057 9.572.097 14.357.007.782.046 1.565.102 2.346.117 1.635.235 3.271.395 4.902.112 1.157.268 2.312.451 3.461.259 1.628 1 3.077 1.841 4.462.724 1.191 1.665 2.203 2.905 2.901 2.107 1.186 4.376 1.285 6.663.848 1.545-.295 3.062-.769 4.562-1.258 1.479-.481 2.815-1.269 3.937-2.354 1.051-1.019 1.797-2.261 2.3-3.632.976-2.659 1.28-5.459 1.684-8.237.151-1.04.282-2.083.42-3.125.157-1.186.316-2.371.468-3.556.112-.883.214-1.768.322-2.651.154-1.268.317-2.535.464-3.804.113-.981.209-1.966.309-2.949.129-1.256.268-2.512.379-3.77.086-.955.051-1.927.22-2.864.311-1.718 1.123-3.18 2.646-4.125.637-.395 1.356-.655 2.063-.989l-.12-.186zM40.236 67.361c-.761-1.802-1.218-3.68-1.354-5.622-.128-1.825.089-3.643.276-5.46.182-1.76.333-3.528.386-5.296.088-2.906-.108-5.808-.247-8.712-.084-1.729.117-3.479.271-5.212.139-1.561.312-3.126.607-4.664.495-2.581 1.152-5.125 2.086-7.591.887-2.338 1.906-4.615 3.345-6.665.986-1.406 2.105-2.72 3.18-4.094l-.319-.113c-3.498-1.111-7.053-1.979-10.709-2.358-1.729-.179-3.464-.284-5.198-.387-.532-.032-1.072.04-1.606.091-1.322.126-2.66.176-3.961.424-2.214.421-4.338 1.129-6.305 2.282-1.766 1.035-3.249 2.373-4.491 3.978-1.372 1.772-2.295 3.776-2.958 5.913-.783 2.521-1.156 5.115-1.257 7.733-.088 2.295-.132 4.603.264 6.889.295 1.702.492 3.422.817 5.117.443 2.311.918 4.617 1.467 6.904.785 3.274 1.569 6.553 2.499 9.787.89 3.099 1.894 6.17 2.982 9.204.89 2.476 1.919 4.906 3.003 7.304.706 1.562 1.561 3.065 2.457 4.528.953 1.553 2.037 3.027 3.508 4.154 1.856 1.423 3.293 1.644 5.179.083.808-.669 1.491-1.495 2.194-2.282 1.117-1.25 2.195-2.534 3.307-3.788 1.416-1.598 2.85-3.179 4.273-4.769.301-.336.59-.682.883-1.022l-.484-.425c-1.769-1.699-3.139-3.669-4.095-5.931zM93.924 19.792c1.156 1.356 2.275 2.752 3.309 4.204 2 2.809 3.598 5.842 4.775 9.087.521 1.43.937 2.874.751 4.439-.129 1.096-.118 2.208-.215 3.31-.081.917-.226 1.829-.345 2.743-.178 1.378-.436 2.752-.513 4.136-.073 1.317.003 2.648.086 3.968.084 1.341.265 2.676.388 4.015.139 1.518.326 3.036.369 4.557.035 1.249-.076 2.506-.185 3.753-.13 1.502-.511 2.956-1.079 4.351-.399.982-.876 1.934-1.327 2.917l.181.192.275.213.277-.496c2.339-3.688 4.42-7.518 6.222-11.493 1.159-2.56 2.245-5.156 3.287-7.766 1.624-4.064 2.909-8.242 3.903-12.503.446-1.913.787-3.855 1.09-5.797.236-1.518.433-3.054.477-4.586.047-1.625-.043-3.263-.193-4.884-.112-1.224-.414-2.456-1.181-3.451-1.233-1.602-2.564-3.134-4.201-4.346-1.378-1.021-2.751-2.068-4.23-2.927-2.345-1.36-4.883-2.266-7.535-2.883-2.588-.603-5.21-.863-7.849-.918-1.556-.033-3.119.134-4.672.28-1.407.132-2.805.357-4.222.543 1.52.855 3.019 1.615 4.433 2.511 2.973 1.883 5.637 4.149 7.924 6.831zM55.299 72.514c.961-3.073 2.27-6.007 3.538-8.959 1.028-2.394 1.59-4.916 1.777-7.506.093-1.277.067-2.57.004-3.851-.071-1.423-.185-2.85-.392-4.259-.266-1.801-.569-3.603-.995-5.371-.462-1.913-1.627-3.245-3.623-3.736-1.216-.299-2.424-.287-3.653-.093-3.002.473-5.75 1.579-8.31 3.199-.515.326-.798.589-.709 1.328.188 1.565.229 3.155.222 4.735-.01 2.236-.105 4.472-.19 6.707-.028.728-.133 1.452-.211 2.177-.12 1.11-.351 2.219-.344 3.327.007 1.142.124 2.311.401 3.417.88 3.507 2.744 6.377 5.799 8.402 1.879 1.245 3.958 1.873 6.24 1.992.155-.524.293-1.019.446-1.509zm-3.586-30.087c-.402-.844-.172-1.543.76-1.867.227-.08.461-.165.697-.188.324-.032.654-.008.982-.008 1.182.006 2.319.171 3.295.923.626.482.794 1.122.389 1.779-.575.932-1.452 1.4-2.529 1.49-1.697.141-2.888-.65-3.594-2.129zM98.753 42.119c.136-1.124.245-2.251.384-3.375.056-.452-.182-.574-.561-.585-1.192-.033-2.384-.075-3.576-.097-1.344-.024-2.652.192-3.896.703-1.38.568-2.431 1.478-2.86 2.98-.32 1.12-.406 2.239-.293 3.41.172 1.785.568 3.517 1.193 5.176.834 2.221 1.707 4.441 2.75 6.569 1.413 2.881 3.012 5.67 4.513 8.507.401.757.738 1.547 1.156 2.431.875-1.853 1.302-3.708 1.351-5.622.041-1.61-.088-3.227-.182-4.838-.059-.986-.198-1.966-.294-2.95-.134-1.371-.337-2.741-.368-4.115-.031-1.397.068-2.802.188-4.197.113-1.338.334-2.665.495-3.997zm-2.689-1.082c-.443 1.223-1.39 1.913-2.618 2.116-1.145.188-2.148-.235-2.894-1.148-.531-.65-.328-1.42.468-1.859.914-.506 1.919-.634 3.104-.711.322.059.807.108 1.268.24.669.189.916.692.672 1.362zM60.642 78.697c-.655-.535-1.521-.566-2.144.021-.773.73-1.453 1.565-2.133 2.388-.785.951-1.521 1.94-2.534 2.677-1.474 1.071-3.192 1.515-4.919 1.935-1.373.334-2.752.644-4.129.965l-.017.178c.409.189.805.425 1.231.56 2.1.665 4.236.996 6.455.808 1.602-.136 3.128-.485 4.574-1.171 1.99-.943 3.521-2.437 4.823-4.175.218-.29.317-.719.343-1.093.089-1.321-.582-2.303-1.55-3.093zM112.393 79.223c-1.69.181-3.382.373-5.077.47-.818.047-1.648-.109-2.474-.176-1.385-.112-2.737-.42-3.908-1.16-.678-.427-1.241-.475-1.961-.233-1.028.346-1.867.872-2.115 1.986-.169.753-.23 1.533-.298 2.304-.013.136.157.386.287.42.793.209 1.59.456 2.401.529.996.09 2.01.061 3.013.011 1.083-.054 2.173-.124 3.24-.304 2.515-.422 4.948-1.11 7.109-2.536.779-.515 1.551-1.041 2.325-1.562l-.064-.11c-.826.123-1.648.273-2.478.361z"></path>
    </svg>
)

const LinuxIcon = (color, key) => (
    <svg key={key} viewBox="0 0 128 128">
        <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M113.823 104.595c-1.795-1.478-3.629-2.921-5.308-4.525-1.87-1.785-3.045-3.944-2.789-6.678.147-1.573-.216-2.926-2.113-3.452.446-1.154.864-1.928 1.033-2.753.188-.92.178-1.887.204-2.834.264-9.96-3.334-18.691-8.663-26.835-2.454-3.748-5.017-7.429-7.633-11.066-4.092-5.688-5.559-12.078-5.633-18.981-.036-3.166-.41-6.38-1.081-9.475-1.313-6.04-4.549-10.763-10.418-13.296-4.497-1.942-9.152-2.327-13.901-1.084-6.901 1.805-11.074 6.934-10.996 14.088.074 6.885.417 13.779.922 20.648.288 3.893-.312 7.252-2.895 10.34-2.484 2.969-4.706 6.172-6.858 9.397-1.229 1.844-2.317 3.853-3.077 5.931-2.07 5.663-3.973 11.373-7.276 16.5-1.224 1.9-1.363 4.026-.494 6.199.225.563.363 1.429.089 1.882-2.354 3.907-5.011 7.345-10.066 8.095-3.976.591-4.172 1.314-4.051 5.413.1 3.337.061 6.705-.28 10.021-.363 3.555.008 4.521 3.442 5.373 7.924 1.968 15.913 3.647 23.492 6.854 3.227 1.365 6.465.891 9.064-1.763 2.713-2.771 6.141-3.855 9.844-3.859 6.285-.005 12.572.298 18.86.369 1.702.02 2.679.653 3.364 2.199.84 1.893 2.26 3.284 4.445 3.526 4.193.462 8.013-.16 11.19-3.359 3.918-3.948 8.436-7.066 13.615-9.227 1.482-.619 2.878-1.592 4.103-2.648 2.231-1.922 2.113-3.146-.135-5zm-51.397-80.475c.758-2.601 2.537-4.289 5.243-4.801 2.276-.43 4.203.688 5.639 3.246 1.546 2.758 2.054 5.64.734 8.658-1.083 2.474-1.591 2.707-4.123 1.868-.474-.157-.937-.343-1.777-.652.708-.594 1.154-1.035 1.664-1.382 1.134-.772 1.452-1.858 1.346-3.148-.139-1.694-1.471-3.194-2.837-3.175-1.225.017-2.262 1.167-2.4 2.915-.086 1.089.095 2.199.173 3.589-3.446-1.023-4.711-3.525-3.662-7.118zm-12.75-2.251c1.274-1.928 3.197-2.314 5.101-1.024 2.029 1.376 3.547 5.256 2.763 7.576-.285.844-1.127 1.5-1.716 2.241l-.604-.374c-.23-1.253-.276-2.585-.757-3.733-.304-.728-1.257-1.184-1.919-1.762-.622.739-1.693 1.443-1.757 2.228-.088 1.084.477 2.28.969 3.331.311.661 1.001 1.145 1.713 1.916l-1.922 1.51c-3.018-2.7-3.915-8.82-1.871-11.909zm37.664 64.206c-.203 2.604-.5 2.713-3.118 3.098-1.859.272-2.359.756-2.453 2.964-.108 2.581-.101 5.171-.012 7.753.061 1.77-.537 3.158-1.755 4.393-6.764 6.856-14.845 10.105-24.512 8.926-4.17-.509-6.896-3.047-9.097-6.639.98-.363 1.705-.607 2.412-.894 3.122-1.27 3.706-3.955 1.213-6.277-1.884-1.757-3.986-3.283-6.007-4.892-1.954-1.555-3.934-3.078-5.891-4.629-1.668-1.323-2.305-3.028-2.345-5.188-.094-5.182.972-10.03 3.138-14.747 1.932-4.209 3.429-8.617 5.239-12.885.935-2.202 1.906-4.455 3.278-6.388 1.319-1.854 2.134-3.669 1.988-5.94-.084-1.276-.016-2.562-.016-3.843l.707-.352c1.141.985 2.302 1.949 3.423 2.959 4.045 3.646 7.892 3.813 12.319.67 1.888-1.341 3.93-2.47 5.927-3.652.497-.294 1.092-.423 1.934-.738 2.151 5.066 4.262 10.033 6.375 15 1.072 2.524 1.932 5.167 3.264 7.547 2.671 4.775 4.092 9.813 4.07 15.272-.012 2.83.137 5.67-.081 8.482z"></path>
    </svg>
)

const debianIcon = (color, key) => (
    <svg key={key} viewBox="0 0 128 128">
        <path fill={color} d="M73.776 67.531c-2.065.028.391 1.063 3.087 1.479.745-.581 1.421-1.169 2.023-1.741-1.679.41-3.387.419-5.11.262M84.862 64.768c1.229-1.697 2.127-3.556 2.442-5.478-.276 1.369-1.019 2.553-1.72 3.801-3.86 2.431-.363-1.443-.002-2.916-4.15 5.225-.57 3.133-.72 4.593M88.955 54.12c.249-3.72-.733-2.544-1.063-1.125.384.201.69 2.622 1.063 1.125M65.944 3.283c1.102.198 2.381.35 2.202.612 1.206-.263 1.48-.506-2.202-.612M68.146 3.896l-.779.161.725-.064.054-.097M102.518 55.53c.123 3.34-.978 4.961-1.969 7.829l-1.786.892c-1.46 2.838.142 1.802-.903 4.059-2.281 2.027-6.921 6.345-8.406 6.738-1.084-.023.734-1.278.972-1.771-3.052 2.098-2.449 3.147-7.118 4.422l-.136-.305c-11.516 5.417-27.51-5.318-27.299-19.966-.123.931-.349.697-.605 1.074-.594-7.537 3.481-15.107 10.353-18.196 6.722-3.329 14.602-1.963 19.417 2.524-2.644-3.465-7.909-7.137-14.148-6.793-6.111.097-11.828 3.98-13.735 8.196-3.132 1.972-3.495 7.6-4.859 8.628-1.835 13.491 3.453 19.318 12.398 26.175 1.407.949.396 1.093.587 1.815-2.972-1.392-5.694-3.493-7.931-6.065 1.186 1.739 2.468 3.429 4.125 4.756-2.803-.949-6.546-6.79-7.64-7.028 4.832 8.649 19.599 15.169 27.333 11.935-3.579.131-8.124.073-12.145-1.413-1.688-.869-3.984-2.669-3.574-3.007 10.553 3.944 21.456 2.988 30.586-4.333 2.323-1.81 4.861-4.887 5.594-4.93-1.105 1.661.188.8-.66 2.266 2.316-3.733-1.005-1.521 2.394-6.448l1.256 1.729c-.467-3.098 3.848-6.861 3.41-11.762.99-1.499 1.104 1.612.054 5.061 1.457-3.825.384-4.44.759-7.597.404 1.062.935 2.188 1.208 3.308-.95-3.696.975-6.226 1.45-8.373-.467-.208-1.464 1.634-1.692-2.732.034-1.896.528-.993.718-1.46-.373-.215-1.349-1.668-1.944-4.456.431-.655 1.151 1.698 1.739 1.795-.378-2.217-1.028-3.907-1.053-5.609-1.713-3.579-.606.478-1.996-1.536-1.823-5.687 1.513-1.32 1.738-3.903 2.763 4.003 4.339 10.208 5.062 12.777-.552-3.133-1.443-6.168-2.532-9.105.839.354-1.352-6.446 1.091-1.943-2.609-9.6-11.166-18.569-19.038-22.778.962.881 2.179 1.989 1.743 2.162-3.915-2.331-3.227-2.513-3.787-3.498-3.19-1.297-3.399.104-5.511.003-6.012-3.188-7.171-2.85-12.703-4.848l.252 1.177c-3.984-1.327-4.641.503-8.945.004-.263-.205 1.379-.74 2.73-.937-3.85.508-3.67-.759-7.438.14.929-.651 1.909-1.082 2.9-1.637-3.139.191-7.495 1.828-6.151.339-5.121 2.286-14.218 5.493-19.322 10.28l-.161-1.073c-2.339 2.809-10.2 8.387-10.826 12.022l-.625.146c-1.218 2.06-2.004 4.396-2.97 6.517-1.592 2.713-2.334 1.044-2.107 1.469-3.132 6.349-4.687 11.683-6.03 16.057.958 1.432.022 8.614.385 14.364-1.572 28.394 19.928 55.962 43.43 62.329 3.445 1.23 8.567 1.184 12.924 1.311-5.141-1.471-5.806-.778-10.813-2.525-3.614-1.701-4.405-3.644-6.964-5.864l1.014 1.79c-5.019-1.775-2.918-2.198-7.002-3.491l1.083-1.412c-1.627-.123-4.309-2.74-5.042-4.191l-1.779.07c-2.138-2.638-3.277-4.538-3.194-6.011l-.575 1.024c-.652-1.119-7.865-9.893-4.123-7.85-.696-.637-1.62-1.035-2.622-2.856l.762-.871c-1.802-2.316-3.315-5.287-3.2-6.276.96 1.298 1.627 1.54 2.287 1.763-4.548-11.285-4.803-.622-8.248-11.487l.729-.059c-.559-.842-.898-1.756-1.347-2.652l.316-3.161c-3.274-3.786-.916-16.098-.443-22.851.328-2.746 2.733-5.669 4.563-10.252l-1.114-.192c2.131-3.717 12.167-14.928 16.815-14.351 2.251-2.829-.446-.011-.886-.723 4.945-5.119 6.5-3.617 9.838-4.537 3.6-2.137-3.089.833-1.383-.815 6.223-1.589 4.41-3.613 12.528-4.42.857.487-1.987.752-2.701 1.385 5.185-2.536 16.408-1.959 23.697 1.408 8.458 3.952 17.961 15.638 18.336 26.631l.427.114c-.216 4.37.669 9.424-.865 14.066l1.043-2.201M51.233 70.366l-.29 1.448c1.357 1.845 2.435 3.843 4.167 5.283-1.246-2.434-2.173-3.44-3.877-6.731M54.441 70.24c-.718-.795-1.144-1.751-1.62-2.704.456 1.675 1.388 3.114 2.255 4.578l-.635-1.874M111.226 57.897l-.304.762c-.556 3.951-1.757 7.861-3.599 11.487 2.035-3.825 3.35-8.009 3.903-12.249M66.353 2.293c1.396-.513 3.433-.281 4.914-.617-1.93.162-3.852.259-5.75.503l.836.114M17.326 28.362c.322 2.979-2.242 4.135.567 2.171 1.506-3.39-.588-.935-.567-2.171M14.025 42.15c.646-1.986.764-3.18 1.011-4.328-1.788 2.285-.823 2.773-1.011 4.328"></path>
    </svg>
)

const nodeIcon = (color, key) => (
    <svg key={key} viewBox="0 0 128 128">
        <path fill={color} d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
    </svg>
)

const awsIcon = (color, key) => (
    <svg key={key} viewBox="0 0 128 128">
        <path fill={color} d="M38.089 77.466l-11.4 4.896 10.559 4.514 12.241-4.514-11.4-4.896zm-17.138 6.12l-.382 22.034 16.679 7.345v-22.876l-16.297-6.503zm34.276 0l-15.073 5.739v21.575l15.073-6.121v-21.193zM73.206 15.035l-11.476 4.896 10.635 4.515 12.241-4.515-11.4-4.896zm-15.914 6.503v22.034l14.231 4.132.459-20.046-14.69-6.12zm31.828 1.224l-13.466 5.738v21.652l13.466-6.121v-21.269zM19.306 46.047l-11.399 4.897 10.558 4.514 12.241-4.514-11.4-4.897zm-17.138 6.121l-.382 22.034 16.679 7.345v-22.876l-16.297-6.503zm34.275 0l-15.071 5.738v21.574l15.071-6.12v-21.192zM56.03 45.231l-11.4 4.897 10.558 4.514 12.241-4.514-11.399-4.897zm-17.137 6.121l-.383 22.035 16.679 7.345v-22.877l-16.296-6.503zm34.275 0l-15.072 5.738v21.576l15.072-6.121v-21.193zM109.076 15.035l-11.399 4.896 10.559 4.515 12.241-4.515-11.401-4.896zm-17.137 6.121l-.382 22.034 16.679 7.344v-22.876l-16.297-6.502zm34.275 0l-15.071 5.738v21.575l15.071-6.12v-21.193z"></path>
    </svg>
)

export const TechIcons = [
    AndroidIcon,
    ReactIcon,
    JavaIcon,
    JSIcon,
    DockerIcon,
    LinuxIcon,
    debianIcon,
    nodeIcon,
    awsIcon,
    PythonIcon,
    GitIcon,
    PgIcon,
]