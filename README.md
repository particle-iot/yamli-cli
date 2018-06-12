# YAML + Include

This executable allows a quick way of splitting big YAML files using `!include` tag.

#### Before
`my.yaml`
```yaml
foo:
  bar:
    - a
    - b
    - c
```

#### After

`my.yaml`
```yaml
foo: !include bar.yaml
```

`bar.yaml`
```yaml
bar:
  - a
  - b
  - c
```

## Installation

Go to [Releases](https://github.com/suda/yamli-cli/releases), download version for your OS/arch, make it executable and place somewhere in `PATH`. I.e. for macOS:

```sh
$ wget https://github.com/suda/yamli-cli/releases/download/0.0.1/yamli-osx
$ chmod +x yamli-osx
$ mv yamli-osx /usr/local/bin/yamli
```

## Usage

The CLI waits on `stdin` for the input YAML and outputs it to `stdout`. Any errors are being sent to `stderr`.

```sh
$ cat my.yaml | yamli > output.yaml
```
