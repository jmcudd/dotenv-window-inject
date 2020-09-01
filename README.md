# dotenv-window-inject

Loads the .env file with dotenv and injects whitelisted/prefixed variables into
the window object. This is ideal for injecting environmental variables at run
time, particularly when running a dockerized environment with compiled assets.

# Usage

```
import {injectDotEnv} from 'dotenv-window-inject';

injectDotEnv(['BASEURL', 'VAR2', 'VAR3'], 'env', 'APP_')
````

# Output

```
<script>window.env={BASEURL:'somevalue', VAR2:'somevalue', VAR3:'somevalue',};</script>
```



