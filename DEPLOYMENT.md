# Deployment Notes

This workspace runs in an isolated environment without direct access to Git remotes. To trigger a new deployment on platforms such as Vercel, clone the repository locally with your credentials and push from there.

## GitHub PR workflow (локально)

Ниже — последовательность команд, которую можно выполнить в локальном окружении, чтобы подготовить Pull Request и запустить автодеплой через Vercel:

```bash
git clone https://github.com/Andeton/TonyDerry.git
cd TonyDerry
git checkout -B feature/codex-update

# перенесите сюда изменения (скопируйте файлы или внесите правки)

git add .
git commit -m "Codex update"
git push -u origin feature/codex-update
```

Далее откройте Pull Request в ветку `main` через GitHub UI. После слияния Vercel автоматически подтянет изменения и выполнит деплой.

## Общие подсказки

Если вы работаете над другим набором правок, последовательность остаётся похожей:

```bash
git clone <your-remote-url> tonyderry
cd tonyderry
# apply the desired changes
npm install
npm run build # optional sanity check
git commit -am "feat: update site content"
git push origin <branch>
```

Once the push completes, Vercel will pick up the changes and rebuild the site if the project is connected to that Git repository.
