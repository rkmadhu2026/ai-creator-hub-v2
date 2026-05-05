# AGENTS.md

## Cursor Cloud specific instructions

This repository (`ai-creator-hub-v2`) is currently an empty scaffold with only a `README.md`. There is no application code, no package manager lockfile, no build system, and no tests yet.

### Current state

- **No services to run.** The repo has no source code or configuration.
- **No dependencies to install.** No `package.json`, `requirements.txt`, `go.mod`, or similar exists.
- **No lint/test/build commands available.**

### When code is added

Once source code is committed, future agents should:

1. Identify the language/framework (check for `package.json`, `requirements.txt`, `pyproject.toml`, `go.mod`, `Cargo.toml`, etc.).
2. Install dependencies using the appropriate package manager.
3. Update the VM environment script (`SetupVmEnvironment`) to include the dependency install command.
4. Update this section with service startup instructions, lint/test/build commands, and any non-obvious caveats discovered during setup.
