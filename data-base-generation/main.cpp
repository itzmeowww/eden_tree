/*
created at 14:26 12 Mar 22
*/
#include <bits/stdc++.h>
using namespace std;

map<string,vector<string> >g;

set<string>root;
map<string,pair<int,int>>pos;

int dfs(int x, int y, string now){
    pos[now] = {x,y};
    cout << now << "@ " << x <<", " << y << endl;
    int shift = 1;
    int ret = 0;
    for(int i = 0; i < g[now].size(); i++){
        int cou = dfs((shift+i-1)*200+x,y+150,g[now][i]);
        ret += cou;
    }
    return ret;
}

void find_path(string now){
    for(auto to : g[now]){
        cout << now << "!" << to <<endl;
        find_path(to);
    }
}

int id = 1;
map<string,int>mark;
void find_id(string now){
    if(mark[now] == 0){
        mark[now] = id;
        cout << now << "=" << id++ << endl;
        for(auto to : g[now]){
            find_id(to);
        }
    }
    
    
}
vector<string>leaves;
void find_leave(string now){
    if(g[now].size() == 0){
        leaves.push_back(now);
    }
    for(auto to : g[now]){
        find_leave(to);
    }
}

int main(){

    root.insert("Introduction to algebra");

    g["Introduction to algebra"].push_back("Solving basic equations & inequalities (one variable, linear)");
    g["Solving basic equations & inequalities (one variable, linear)"].push_back("Linear equations, functions, & graphs");
    g["Linear equations, functions, & graphs"].push_back("Quadratic equations & functions");
    g["Quadratic equations & functions"].push_back("Difference of squares: Polynomial expressions, equations, & functions");
    g["Linear equations, functions, & graphs"].push_back("System of equations");
    g["System of equations"].push_back("Two-variable inequalities");
    g["System of equations"].push_back("Algebraic modeling");
    g["Algebraic modeling"].push_back("Vectors");
    g["Vectors"].push_back("Matrices");
    g["Algebraic modeling"].push_back("Complex numbers");
    g["Complex numbers"].push_back("Conic sections");
    g["Linear equations, functions, & graphs"].push_back("System of equations");
    g["System of equations"].push_back("Two-variable inequalities");
    g["System of equations"].push_back("Algebraic modeling");
    g["Algebraic modeling"].push_back("Vectors");
    g["Vectors"].push_back("Matrices");
    g["Algebraic modeling"].push_back("Complex numbers");
    g["Complex numbers"].push_back("Conic sections");
    g["Introduction to algebra"].push_back("Functions");
    g["Functions"].push_back("Absolute value equations, functions, & inequalities");
    g["Functions"].push_back("Exponential & logarithmic functions");
    g["Exponential & logarithmic functions"].push_back("Radical equations & functions");
    g["Radical equations & functions"].push_back("Rational expressions, equations, & functions");
    g["Functions"].push_back("Trigonometric functions");
    g["Trigonometric functions"].push_back("Vectors");
    g["Vectors"].push_back("Matrices");
    g["Trigonometric functions"].push_back("Complex numbers");
    g["Complex numbers"].push_back("Conic sections");
    g["Functions"].push_back("Perfect squares: Polynomial expressions, equations, & functions");
    g["Perfect squares: Polynomial expressions, equations, & functions"].push_back("Polynomial expressions, equations, & functions");
    g["Introduction to algebra"].push_back("Sequences");
    g["Sequences"].push_back("Series & induction");
    g["Series & induction"].push_back("Algebraic modeling");
    g["Algebraic modeling"].push_back("Vectors");
    g["Vectors"].push_back("Matrices");
    g["Algebraic modeling"].push_back("Complex numbers");
    g["Complex numbers"].push_back("Conic sections"); 
   
    freopen("output.txt","w",stdout);
    find_leave("Introduction to algebra");

    for(auto x: root){
        cout << x << "^";
    }
    cout << endl;
    for(auto x : leaves){
        cout << x << "^";
    } 
    cout << endl;

    find_id("Introduction to algebra");   
    dfs(0,0,"Introduction to algebra");
    find_path("Introduction to algebra");
    




}