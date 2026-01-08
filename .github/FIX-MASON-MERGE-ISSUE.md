# Git Configuration Fix: Main Branch Visibility

## Problem Statement
The repository had issues where it felt like "nothing is merging to main" (originally stated as "mason" due to typo). This was because the `main` branch was not visible in the local git repository.

## Root Cause
The git configuration file (`.git/config`) had a restricted fetch refspec that only fetched a single branch:

```ini
[remote "origin"]
    url = https://github.com/gbtunney/gbt-monorepo
    fetch = +refs/heads/copilot/fix-mason-merge-issues:refs/remotes/origin/copilot/fix-mason-merge-issues
```

This prevented the repository from seeing any other branches, including `main`.

## Solution
Updated the fetch refspec to the standard configuration that fetches all branches:

```ini
[remote "origin"]
    url = https://github.com/gbtunney/gbt-monorepo
    fetch = +refs/heads/*:refs/remotes/origin/*
```

## Steps Applied
1. Updated git fetch configuration: `git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"`
2. Fetched all branches: `git fetch --all`
3. Verified main branch visibility: `git branch -r` now shows `origin/main`
4. Set branch tracking to main: `git branch --set-upstream-to=origin/main copilot/fix-mason-merge-issues`

## Verification
After the fix:
- ✅ Main branch is visible: `origin/main` exists
- ✅ All 7 remote branches are now tracked (previously only 1)
- ✅ Git status correctly shows: "Your branch is ahead of 'origin/main' by 1 commit"
- ✅ Can compare and merge with main branch
- ✅ Changeset configuration correctly references `"baseBranch": "main"`

## Impact
This fix enables:
- Proper branch comparisons with main
- Ability to create PRs targeting main
- Changesets workflow to function correctly
- CI/CD workflows that depend on main branch to work
- General git operations that require main branch visibility
