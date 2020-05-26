#include <WiFiClient.h>
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>
#include <MySQL_Connection.h>
#include <MySQL_Cursor.h>
#include <MySQL_Encrypt_Sha1.h>
#include <MySQL_Packet.h>


//declaracao wifi
char* rede="AMOR E PAZ"; //Nome da WIFI
char* senha="xeparacomisso"; //SEnha da wifi
ESP8266WebServer server(80);
//declaracao de conexão do ip BD

IPAddress server_addr(85, 10, 205, 173);

char senhab[]="lavs1998"; //senha usuario bd
char user[]="mingosso1"; //nome do usuarido do bd
 

char insert_sql[]="INSERT INTO TEMPERATURA (Temperatura,Data,Hora) VALUES ('%d','curdate()','curtime()')"; // Query MYSQL
char banco[]="temperatura1";
char query[128];
//instalando objetos

ESP8266WebServer client;
MySQL_Connection con((Client *)&client);

// declaracao de variaveis

int temperatura;
unsigned long lm35;
int tempo =0 ;
int tempoAntigo =0;
int espera = 3000;


//incio do setup
void setup()
{    
  Serial.begin(9600);
  pinMode(A0,INPUT);
  wifi();
  mysql();
}

void loop()
{
 temperatura=analogRead(A0);
 lm35=(20+0.488155*(temperatura-20));
 if(tempo - tempoAntigo > espera){
    Serial.println("Enviando o valor da tempertaura ");
    enviar();
    tempoAntigo = tempo; 
}
delay(10);
}


//Enviar para o BD
void enviar(){
  sprintf(query,insert_sql,lm35);

  MySQL_Cursor *cur_nem = new MySQL_Cursor(&con);
  cur_nem->execute(query);
  delete cur_nem;
  Serial.print("informacoes enviadas");
}



//conexao com a wifi
void wifi(){
  digitalWrite(LED_BUILTIN,LOW);
  WiFi.begin(rede,senha);
  while(WiFi.status()!=WL_CONNECTED){
    delay(500);
  }
  server.begin();
  Serial.println("conectado a wifi");
  Serial.print("IP: ");
  Serial.print(WiFi.localIP());
  Serial.println();
  digitalWrite(LED_BUILTIN,HIGH);
}

//conecta mysql
   
void mysql(){
  digitalWrite(LED_BUILTIN,LOW);

  while(!Serial){
    ;
  }

  while(!con.connect(server_addr,3306,user,senhab)){
    Serial.println("conexao falhou");
    con.close();
    delay(1000);
    Serial.println("tentando novamente");
  }

  Serial.println("conectado ao servidor sql");
  digitalWrite(LED_BUILTIN,HIGH);
}
  
