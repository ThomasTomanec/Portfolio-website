# Webová aplikace osobního portfolia
Cílem této práce bylo vytvořit moderní webovou aplikaci, která slouží nejen jako osob-ní portfolio jejího vlastníka, ale také jako rozšířená platforma s možností správy obsa-hu, konkrétně psaní a publikování blogových příspěvků. Zabezpečené administrátor-ské prostředí je navíc obohaceno o analýzu aktivity návštěvníků, která je přehledně zobrazována pomocí grafů. Tím se aplikace stává nejen reprezentativním nástrojem pro prezentaci dovedností a zkušeností, ale také funkčním prostředkem pro tvorbu dynamického obsahu 
a získávání užitečných dat pro další optimalizaci.

## Počáteční zkušenosti
S problematikou webové aplikace s implementací administrátorského dashboardu jsem se již jednou setkal. Při vytváření uchazečského náborového projektu do nové práce. 
Vše od přihlašování, správu a výpis dat v něm bylo řešeno za pomocí jednoduchého php frameworku Laravel.

## Využité technologie
- ReactJS
- NextJS
- Docker
- PostgreSQL
- Tailwind
- ChartJS
- AuthJS

## ZPŮSOBY ŘEŠENÍ A POUŽITÉ POSTUPY
### Hlavní stránka
Hlavní úvodní stránka slouží k vytvoření prvního dojmu pro návštěvníky a je rozdělena do několika klíčových komponent. Začíná hero sekcí, která informuje uživatele o aktu-ální stránce a jejím obsahu. Následuje sekce Skills & Experience, kde jsou prezento-vány 
mé dovednosti a technologie, které aktivně využívám. Hlavní část stránky tvoří sekce 
My GitHub projects, která zobrazuje mé připojené projekty prostřednictvím GitHub API, a komponenta blog, která zobrazuje poslední tři příspěvky.

### Zabezpečená autentizace do dashboardu
Dashboard, který umožňuje upravovat data stránky a sledovat citlivé analytické in-formace, bylo nutné důkladně zabezpečit pomocí autentizace a autorizace. V rámci NextJS jsem si s touto problematikou dlouho nevěděl rady, protože jsem požadoval, aby řešení bylo dostatečně komplexní a přizpůsobitelné mým potřebám. Nakonec jsem se rozhodl využít knihovnu AuthJS, která poskytuje potřebnou flexibilitu a bez-pečnost.

![image](https://github.com/user-attachments/assets/15093206-8b8f-4ea4-bc4f-edd62e79c1e9)
![image](https://github.com/user-attachments/assets/a8219cca-c36c-424e-9334-96b85053791f)



#### Funkcionalita:
- Formuláře, Prisma
- Midlleware
- Email verifikace, Resetování hesla
- OAuth (Google, GitHub)

### Blogy
Přehled posledních tří příspěvků je vyobrazen na úvodní stránce v samostatné kom-ponentě. Návštěvník si však může prohlédnout všechny dostupné blogy na speciální podstránce, ke které se dostane prostřednictvím odkazu v navigačním panelu (hea-der). 
Pro správu blogů je k dispozici dashboard, který obsahuje seznam všech blogů vy-psaných v přehledné tabulce. V této tabulce jsou uvedeny všechny informace o kaž-dém blogu, včetně názvu, data vytvoření a obsahu. Kromě toho jsou k dispozici akční tlačítka, která umožňují:

#### Funkcionalita:
-	Přidávání, odebírání blogů
-	Editování už vytvořených blogů


