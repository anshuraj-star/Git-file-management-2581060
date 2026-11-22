# Git File and Version Management

**Course:** Version Control System (CSE25303)  
**Assignment:** Assignment 2 — Git File and Version Management  
**Student:** Anshu Raj  
**URN:** 2581060  
**Semester:** III

## Project purpose

This repository demonstrates Git repository setup, staging and diff inspection, file relocation and deletion, ignore rules, restoration, commit amendment, reset modes, and safe rollback with `git revert`.

## Project files

- `app.js` — a small CampusNotes example with a `listNotes()` function.
- `docs/study-notes.md` — short notes used in the file-move exercise.
- `.gitignore` — excludes environment files, log files, and installed dependencies.
- `VCS_CSE25303_Assignment_Git_File_and_Version_Management_2581060.docx` — submitted assignment document.

## Run the example

Run:

```bash
node app.js
```

The script logs the CampusNotes version. The `listNotes()` function is exported for use by another Node.js file.

## Git workflow demonstrated

### Q1 — Remote repository setup

```bash
git init vcs-file-management
cd vcs-file-management
git config user.name "Anshu Raj"
git config user.email "anshuraj-star@users.noreply.github.com"
git add README.md
git commit -m "chore: initial commit with README"
git remote add origin https://github.com/anshuraj-star/Git-file-management-2581060.git
git push -u origin main
git status
```

### Q2 — Staging and diff inspection

```bash
git status -s
git diff
git add app.js notes.txt
git diff --staged
git commit -m "feat: implement note listing routines"
git diff HEAD~1 HEAD --stat
```

### Q3 — File lifecycle and ignore rules

```bash
# Use placeholders only; never put real credentials in Git history.
printf "API_KEY=PLACEHOLDER_NOT_A_SECRET\n" > .env
printf "Temporary debug output\n" > debug.log
git add .env debug.log
git commit -m "temp: commit placeholder env and debug log"

mkdir docs
git mv notes.txt docs/study-notes.md
git rm --cached .env
git rm debug.log
git add .gitignore docs/study-notes.md
git commit -m "refactor: relocate notes to docs/ and untrack .env"
git status -s
```

Do not commit real credentials or secrets. The ignore rules keep `.env` and log files out of the repository.

### Q4 — Restore, unstage, and amend

```bash
git restore app.js
git add config.json
git restore --staged config.json
git add config.json
git commit -m "feat: add application configuration"
git add app.js
git commit --amend -m "feat: add config.json and verified schema handler"
git log --oneline --graph --decorate -n 4
```

### Q5 — Reset and safe revert

```bash
# First make a small temporary edit to a tracked file and commit it.
git commit -am "test: experimental caching routine"
git reset --soft HEAD~1
git status -s
git commit -m "test: experimental caching routine"
git reset --mixed HEAD~1
git status -s
git reset --hard HEAD
git status
git revert HEAD --no-edit
git log --oneline -n 3
```

Use `git reset` carefully: it changes local branch history. For a change already shared with others, `git revert` is generally safer because it records an inverse commit rather than rewriting published history.
