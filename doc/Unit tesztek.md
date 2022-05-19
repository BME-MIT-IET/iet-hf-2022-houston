# Unit tesztek

Az én feladatom a Unit tesztek kiegészítése és kijavítása volt. A projekt pár commit-tal ezelőtt nagy változtatásokon
lépett át és sok teszt törlésre került. Egyik feladatom az lett, hogy ezeket visszaállítsam. 
Ez a feladat nem volt triviális, mivel nagy struktúrális változásokon ment át azóta a projekt, így sok tesztet lényegesen át kellett írni, hogy újra működőképessé váljon.

Miután ezt elvégeztem, pár új tesztet is hozzáadtam a projekthez, ezek főleg különböző adatbázis repository-kat felhasználó osztályokat tesztelik.

## Felhasznált technológiák

A tesztek megírásához JUnit-ot használtam és a függőségeket a Mockito segítségével irányítottam.